import "../pages/index.css";
import { enableValidation } from "./validate.js";
import { cardsContainer, renderCard } from "./card.js";
import { openPopup, closePopup } from "./modal.js";

const popup = document.querySelector(".popup_type_profile");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector(".popup__close-button");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCloseForma = document.querySelector(".popup__cls-btn");
const placeClose = document.querySelector(".place__close");
const place = document.querySelector(".popup_type_picture");
const linkElement = document.querySelector("#forma-link");
const titleElement = document.querySelector("#forma-title");
const popupNewPlace = document.querySelector(".popup-new-place");
const popupCreateBtn = document.querySelector(".popup__place-form");
const popupContainer = document.querySelector(".popup__container");
const popupPlaceContainer = document.querySelector(".popup__place-container");
const formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
const nameInput = document.querySelector("#popup-title"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector("#popup-info");
const profTitle = document.querySelector(".profile__title");
const profJob = document.querySelector(".profile__subtitle");

function submitPlace(evt) {
  evt.preventDefault();
  renderCard(titleElement, linkElement);
  evt.target.reset();
  closePopup(popupNewPlace);
}
buttonEdit.addEventListener("click", function () {
  openPopup(popup);
  nameInput.value = profTitle.textContent;
  jobInput.value = profJob.textContent;
});
buttonAdd.addEventListener("click", function () {
  openPopup(popupNewPlace);
});
buttonClose.addEventListener("click", function () {
  closePopup(popup);
});
buttonCloseForma.addEventListener("click", function () {
  closePopup(popupNewPlace);
});

popup.addEventListener("click", function () {
  closePopup(popup);
});
place.addEventListener("click", function () {
  place.classList.remove(`place_active`);
});
popupNewPlace.addEventListener("click", function () {
  closePopup(popupNewPlace);
});
popupContainer.addEventListener("click", function (evt) {
  evt.stopPropagation();
});
popupPlaceContainer.addEventListener("click", function (evt) {
  evt.stopPropagation();
});

placeClose.addEventListener("click", function () {
  place.classList.remove(`place_active`);
});

const validationSetup = {
  formSelector: ".popup__form",
  contentSelector: ".popup__content",
  submitButtonSelector: ".popup__submit-button",
  disabledButton: "popup__submit-button_disabled",
  titleError: "popup-title-error_active",
};

function editformSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  profTitle.textContent = nameInput.value;
  profJob.textContent = jobInput.value;
  // Выберите элементы, куда должны быть вставлены значения полей
  closePopup(popup);
}

formElement.addEventListener("submit", editformSubmitHandler);

popupCreateBtn.addEventListener("submit", submitPlace);

enableValidation(validationSetup);
