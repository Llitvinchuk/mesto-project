const popupSubmit = document.querySelector(".popup__submit-button");
const buttonEdit = document.querySelector(".profile__edit-button");

const buttonAdd = document.querySelector(".profile__add-button");

const nameInput = document.querySelector("#popup-title"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector("#popup-info");
const profTitle = document.querySelector(".profile__title");
const cardSelector = "#template-elements";
const profJob = document.querySelector(".profile__subtitle");
const profAvatar = document.querySelector(".profile__avatar");
const avatarName = document
  .querySelector(".popup__form-avatar")
  .querySelector(".popup__content");
const avatarSubmit = document.querySelector(".popup__submit-button");
const cardSubmit = document.querySelector(".popup__submit-button");
const popupImage = ".popup_type_picture";
const containerElements = ".element-container";

export {
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
  cardSelector,
  containerElements,
};

export const validationSetup = {
  formSelector: ".popup__form",
  contentSelector: ".popup__content",
  submitButtonSelector: ".popup__submit-button",
  submitButtonDeactive: ".popup__submit-button_disabled",
  titleError: "error",
  titleErrorActive: ".popup-error_active"
};

// export const ValidationSettings = {
//   formList:'form',
//   inputList:'popup__input',
//   ButtonSave: 'popup__button-save',
//   inactiveButton: 'popup__button-save_disable',
//   inputError: 'error',
//   errorClass: 'popup__warning_show'
// }; 