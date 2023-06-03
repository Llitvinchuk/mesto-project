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
    api,
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

const popupTypeProfile = new PopupWithForm(".popup_type_profile", editProfile);

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

const changePopupAvatar = new PopupWithForm(".popup__avatar", changeAvatar);

function createNewCard(data, popup) {
  createCard.setLoading(true);

  api
    .addNewCard({ name: data["forma-title"], link: data["forma-info"] })
    .then((data) => {
      const card = createNewCards(data);
      const cardElement = card.render();
      cardList.addItem(cardElement);

      CardValidate.disableButton();

      popup.close();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      createCard.setLoading(false);
    });
}
const createCard = new PopupWithForm(".popup-new-place", createNewCard);

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



//подключаем валидацию
  const CardValidate = new FormValidator(validationSetup, createCard._popupForm);
  CardValidate.enableValidation();
  
  const ProfileValidate = new FormValidator(validationSetup, popupTypeProfile._popupForm);
  ProfileValidate.enableValidation();  

  const AvatarValidate = new FormValidator(validationSetup, changePopupAvatar._popupForm);
  AvatarValidate.enableValidation();