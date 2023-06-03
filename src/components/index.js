import "../pages/index.css";

import Api from "./Api";
import Section from "./Section";
import { PopupWithImage } from "./PopupWithImage";

import FormValidator from "./FormValidator";
import UserInfo from "./UserInfo";
import { PopupWithForm } from "./PopupWithForm";

import {
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  profTitle,
  profJob,
  profAvatar,
  avatarName,
  popupImage,
  validationSetup,
  containerElements,
} from "./util/constans";

import Card from "./Card";

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-23",
  headers: {
    authorization: "828dfec4-4859-48aa-a7be-cfe17041058c",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo({
  selectorName: ".profile__title",
  selectorInfo: ".profile__subtitle",
  selectorAvatar: ".profile__avatar",
});

const onCardClick = (data) => () => popupWithImage.open(data);

const createNewCards = (data) => {
  const card = new Card({
    data: data,
    handleLike: (card) => {
      const elementLike =
        card._elementsTemplate.querySelector(".element__like");
      const likeCounter = card._elementsTemplate.querySelector(
        ".element__like-counter"
      );
      if (elementLike.classList.contains("element__like_active")) {
        api
          .deleteLike(card._id)
          .then((data) => {
            likeCounter.textContent = data.likes.length;
            elementLike.classList.remove("element__like_active");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        api
          .addLike(card._id)
          .then((data) => {
            likeCounter.textContent = data.likes.length;
            elementLike.classList.add("element__like_active");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    },

    userId,
    handleCardClick: onCardClick(data),
    handleLikeCard: (_) => card.handleLikeCard(),
    handleDeleteCard: (_) => {
      api
        .deleteCard(data._id)
        .then((_) => {
          card.handleRemoveCard();
        })
        .catch((err) => {
          console.error(err);
        });
    },
  });

  return card;
};
const cardList = new Section(
  {
    renderer: (item) => {
      const card = createNewCards(item);
      const cardElement = card.render();
      cardList.addItem(cardElement);
    },
  },
  containerElements
);

function editProfile(data, popup) {
  popupTypeProfile.setLoading(true);

  api
    .editProfile({ name: data["popup-title"], about: data["popup-info"] })
    .then((data) => {
      userInfo.setUserInfo(data);

      popup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      popupTypeProfile.setLoading(false);
    });
}

const popupTypeProfile = new PopupWithForm(".popup_type_profile", editProfile); //попап профиля

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

function changeAvatar(evt, popup) {
  changePopupAvatar.setLoading(true);

  const avatar = avatarName.value;

  api
    .editAvatar(avatar)
    .then((data) => {
      userInfo.setUserAvatar(data);

      popup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      changePopupAvatar.setLoading(false);
    });
}

const changePopupAvatar = new PopupWithForm(".popup__avatar", changeAvatar); // попап аватарки

function createNewCard(data, popup) {
  createCard.setLoading(true);

  api
    .addNewCard({ name: data["forma-title"], link: data["forma-info"] })
    .then((data) => {
      const card = createNewCards(data);
      const cardElement = card.render();
      cardList.addItem(cardElement);

      //эта строчка отключает кнопку
      const disableButton = new FormValidator(
        validationSetup,
        popup._popupForm
      )._disableButton();

      popup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      createCard.setLoading(false);
    });
}
const createCard = new PopupWithForm(".popup-new-place", createNewCard); // попап добавления карточки

buttonEdit.addEventListener("click", function () {
  popupTypeProfile.open();

  nameInput.value = profTitle.textContent;
  jobInput.value = profJob.textContent;
});

buttonAdd.addEventListener("click", function () {
  createCard.open();
});
profAvatar.addEventListener("click", function () {
  changePopupAvatar.open();
});

let userId;

Promise.all([api.getInitialCards(), api.getUserData()])
  .then(([cards, userData]) => {
    userInfo.setUserInfo(userData);
    userId = userData._id;
    cardList.render(cards);
  })
  .catch((err) => console.log(err));

//подключаю новую валидацию
const forms = document.querySelectorAll(".popup__form");
forms.forEach((form) => {
  const Validate = new FormValidator(validationSetup, form)._enableValidation();
});

//const disableButton = new FormValidator(validationSetup, ???)._disableButton();
