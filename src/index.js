// import "./pages/index.css";
const popup = document.querySelector(".popup_type_profile");
const buttonEdit = document.querySelector(".profile__edit-button");
const buttonClose = document.querySelector(".popup__close-button");
const buttonAdd = document.querySelector(".profile__add-button");
const buttonCloseForma = document.querySelector(".popup__cls-btn");
const cardsContainer = document.querySelector(".element-container");
const placeClose = document.querySelector(".place__close");
const elementsTemplate = document.querySelector("#template-elements").content;
const place = document.querySelector(".popup_type_picture");
const linkElement = document.querySelector("#forma-link");
const titleElement = document.querySelector("#forma-title");
const popupNewPlace = document.querySelector(".popup-new-place");
const popupCreateBtn = document.querySelector(".popup__place-form");
const popupContainer = document.querySelector(".popup__container");
const popupPlaceContainer = document.querySelector(".popup__place-container");
function submitPlace(evt) {
  evt.preventDefault();
  renderCard(titleElement, linkElement);
  closePopup(popupNewPlace);
}
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
buttonEdit.addEventListener("click", function () {
  openPopup(popup);
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
function keyHandler(evt) {
  if (evt.key === "Enter") {
    closePopup(popup);
  }
}
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
function PlaceHandler(evt) {
  if (evt.key === "Enter") {
    place.classList.remove(`place_active`);
    console.log("klskdfcm");
  }
}

placeClose.addEventListener("click", function () {
  place.classList.remove(`place_active`);
});

// Находим форму в DOM
const formElement = document.querySelector(".popup__form"); // Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector("#popup-title"); // Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector("#popup-info"); // Воспользуйтесь инструментом .querySelector()
const popupContent = document.querySelector(".popup__content");
const profTitle = document.querySelector(".profile__title");
const profJob = document.querySelector(".profile__subtitle");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function editformSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value
  profTitle.textContent = nameInput.value;
  profJob.textContent = jobInput.value;

  // Выберите элементы, куда должны быть вставлены значения полей
  closePopup(popup);
  // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", editformSubmitHandler);
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
popupCreateBtn.addEventListener("submit", submitPlace);

function addnewCard(titleValue, imageValue) {
  const cardElement = elementsTemplate
    .querySelector(".element")
    .cloneNode(true);
  cardElement.querySelector(".element__title").textContent = titleValue;

  cardElement.querySelector(".element__image").src = imageValue;
  cardElement.querySelector(".element__image").alt = "image";
  cardElement
    .querySelector(".element__image")
    .addEventListener(`click`, function (evt) {
      place.classList.add("place_active");
      place.querySelector(`.place__image`).src = evt.target.src;

      place.querySelector(".place__text").textContent = titleValue;
    });
  cardElement
    .querySelector(".element__like")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like_active");
    });
  cardElement
    .querySelector(".element__trash")
    .addEventListener("click", function () {
      cardElement.remove();
    });

  return cardElement;
}
function renderCard(linkElement, titleElement) {
  cardsContainer.prepend(addnewCard(linkElement.value, titleElement.value));
}
for (let i = 0; i < initialCards.length; i++) {
  cardsContainer.prepend(
    addnewCard(initialCards[i].name, initialCards[i].link)
  );
}

const showInputError = (formElement, popupContent, errorMessage) => {
  const errorElement = formElement.querySelector(`.${popupContent.id}-error`);
  errorElement.textContent = errorMessage;
  console.log("🚀 ~ showInputError ~ errorElement", errorElement);

  console.log("🚀 ~ showInputError ~ popupContent.id", popupContent.id);

  errorElement.classList.add("popup-title-error_active");
};

const hideInputError = (formElement, popupContent) => {
  const errorElement = formElement.querySelector(`.${popupContent.id}-error`);
  errorElement.classList.remove("popup-title-error_active");
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__content"));

  const buttonElement = formElement.querySelector(".popup__submit-button");

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((popupContent) => {
    popupContent.addEventListener("input", function () {
      checkInputValidity(formElement, popupContent);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((popupContent) => {
    return !popupContent.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__submit-button_disabled");
  } else {
    buttonElement.classList.remove("popup__submit-button_disabled");
  }
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));

  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};
enableValidation();
