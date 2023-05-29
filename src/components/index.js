import "../pages/index.css";
import { enableValidation, resetButton } from "./validate.js";
import Api from "./Api.js";
import Card from "./Card";

import Validate from './util/Validate';

const profilePopup = document.querySelector(".popup_type_profile");
const popupSubmit = document.querySelector(".popup__submit-button");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector(".popup__close-button");
const buttonAdd = document.querySelector(".profile__add-button");
const linkElement = document.querySelector("#forma-link");
const titleElement = document.querySelector("#forma-title");
const popupNewPlace = document.querySelector(".popup-new-place");
const popupCreateBtn = document.querySelector(".popup__place-form");
const formElement = document.querySelector(".popup__form-profile"); // Воспользуйтесь методом querySelector()
const nameInput = document.querySelector("#popup-title"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector("#popup-info");
const profTitle = document.querySelector(".profile__title");
const profSubtitle = document.querySelector(".profile__subtitle");
const profJob = document.querySelector(".profile__subtitle");
const profAvatar = document.querySelector(".profile__avatar");
const popups = document.querySelectorAll(".popup");
const popupAvatar = document.querySelector(".popup__avatar");
const popupFormAvatar = document.querySelector(".popup__form-avatar");
const avatarName = document
  .querySelector(".popup__form-avatar")
  .querySelector(".popup__content");
const avatarSubmit = document.querySelector(".popup__submit-button");
const cardSubmit = document.querySelector(".popup__submit-button");

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-23",
  headers: {
    authorization: "828dfec4-4859-48aa-a7be-cfe17041058c",
    "Content-Type": "application/json",
  },
});

const getInitialCards = api
  .getInitialCards()
  .then((data) => data)
  .catch((error) => {
    console.error(error);
  });
const getUserData = () => ({});

Promise.all([getUserData(), getInitialCards])
  .then(([dataUser, cards]) => {
    user = dataUser;
    profTitle.textContent = user.name;
    profSubtitle.textContent = user.about;
    profAvatar.src = user.avatar;

    cards.reverse().forEach((data) => {
      const card = new Card(data, 4);
      card.render();
      // cardsContainer.prepend(createCards(data, user));
    });
  })
  .catch((err) => {
    console.error(err);
  });

let user = {};

function redactionProfile(evt) {
  evt.preventDefault();
  popupSubmit.textContent = "Сохранение...";
  editProfile(nameInput.value, jobInput.value)
    .then(() => {
      profTitle.textContent = nameInput.value;
      profSubtitle.textContent = jobInput.value;
      closePopup(profilePopup);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      popupSubmit.textContent = "Сохранить";
    });
}
function changeAvatar(evt) {
  evt.preventDefault();
  avatarSubmit.textContent = "Сохранение...";
  const avatar = avatarName.value;
  editAvatar(avatar)
    .then((item) => {
      profAvatar.src = item.avatar;
      evt.target.reset();
      closePopup(popupAvatar);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      avatarSubmit.textContent = "Сохранить";
    });
}
function createNewCard(evt) {
  evt.preventDefault();
  cardSubmit.textContent = "Создание...";
  addNewCard(linkElement.value, titleElement.value)
    .then((data) => {
      cardsContainer.prepend(createCards(data, user));
      evt.target.reset();
      closePopup(popupNewPlace);
    })
    .catch((err) => {
      console.error(err);
    })
    .finally(() => {
      cardSubmit.textContent = "Создать";
    });
}

buttonEdit.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = profTitle.textContent;
  jobInput.value = profJob.textContent;
});

buttonAdd.addEventListener("click", function () {
  openPopup(popupNewPlace);
});
profAvatar.addEventListener("click", function () {
  openPopup(popupAvatar);
});

const validationSetup = {
  formSelector: ".popup__form",
  contentSelector: ".popup__content",
  submitButtonSelector: ".popup__submit-button",
  disabledButton: "popup__submit-button_disabled",
  titleError: "popup-title-error_active",
};

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

formElement.addEventListener("submit", redactionProfile);

popupCreateBtn.addEventListener("submit", createNewCard);

popupFormAvatar.addEventListener("submit", changeAvatar);



//enableValidation(validationSetup);
//подключаю новую валидацию

const Validat = new Validate(ValidationSettings)._enableValidation();
