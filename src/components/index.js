import "../pages/index.css";

import Api from "./Api";
import Section from "./Section";
import { PopupWithImage } from "./PopupWithImage";

import FormValidator from "./util/FormValidator";
import UserInfo from "./UserInfo";
import { PopupWithForm } from "./PopupWithForm";

import {
  popupSubmit,
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  profTitle,
  profJob,
  profAvatar,
  avatarName,
  avatarSubmit,
  cardSubmit,
  popupImage,
  validationSetup,
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

api.getUserData().then((data) => {
  userInfo.setUserInfo(data);
});

const cardList = new Section({
  api,
  selector: ".element-container",
  me: userInfo,
});
cardList.render();

function editProfile(data, popup) {
  popupSubmit.textContent = "Сохранение...";

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
      popupSubmit.textContent = "Сохранить";
    });
}

const popupTypeProfile = new PopupWithForm(".popup_type_profile", editProfile);

const popupWithImage = new PopupWithImage(popupImage);
popupWithImage.setEventListeners();

let user = {};

function changeAvatar(evt, popup) {
  avatarSubmit.textContent = "Сохранение...";
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
      avatarSubmit.textContent = "Сохранить";
    });
}

const changePopupAvatar = new PopupWithForm(".popup__avatar", changeAvatar);

function createNewCard(data, popup) {
  cardSubmit.textContent = "Создание...";
  api
    .addNewCard({ name: data["forma-title"], link: data["forma-info"] })
    .then((data) => {
      cardList.render();
      popup.close();
      evt.target.reset();
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      cardSubmit.textContent = "Создать";
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


// popups.forEach((popup) => {
//   popup.addEventListener("mousedown", (evt) => {
//     if (evt.target.classList.contains("popup_opened")) {
//       closePopup(popup);
//     }
//     if (evt.target.classList.contains("popup__close")) {
//       closePopup(popup);
//     }
//   });
// });

//подключаю новую валидацию
const Validat = new FormValidator(validationSetup)._enableValidation();
