import "../pages/index.css";
import { enableValidation } from "./validate.js";
import { renderCard } from "./card.js";
import { openPopup, closePopup } from "./modal.js";

const profilePopup = document.querySelector(".popup_type_profile");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector(".popup__close-button");
const buttonAdd = document.querySelector(".profile__add-button");
const linkElement = document.querySelector("#forma-link");
const titleElement = document.querySelector("#forma-title");
const popupNewPlace = document.querySelector(".popup-new-place");
const popupCreateBtn = document.querySelector(".popup__place-form");
const formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
const nameInput = document.querySelector("#popup-title"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector("#popup-info");
const profTitle = document.querySelector(".profile__title");
const profJob = document.querySelector(".profile__subtitle");
const popups = document.querySelectorAll(".popup");

function submitPlace(evt) {
  evt.preventDefault();
  renderCard(titleElement, linkElement);
  evt.target.reset();
  closePopup(popupNewPlace);
}
buttonEdit.addEventListener("click", function () {
  openPopup(profilePopup);
  nameInput.value = profTitle.textContent;
  jobInput.value = profJob.textContent;
});
buttonAdd.addEventListener("click", function () {
  openPopup(popupNewPlace);
});

const validationSetup = {
  formSelector: ".popup__form",
  contentSelector: ".popup__content",
  submitButtonSelector: ".popup__submit-button",
  disabledButton: "popup__submit-button_disabled",
  titleError: "popup-title-error_active",
};

function editformSubmitHandler(evt) {
  evt.preventDefault();
  profTitle.textContent = nameInput.value;
  profJob.textContent = jobInput.value;
  closePopup(profilePopup);
}

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

formElement.addEventListener("submit", editformSubmitHandler);

popupCreateBtn.addEventListener("submit", submitPlace);

enableValidation(validationSetup);
