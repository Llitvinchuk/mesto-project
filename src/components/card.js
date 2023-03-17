export const cardsContainer = document.querySelector(".element-container");
const elementsTemplate = document.querySelector("#template-elements").content;
const popupPlace = document.querySelector(".popup_type_picture");
const linkElement = document.querySelector("#forma-link");
const titleElement = document.querySelector("#forma-title");
const popupPlaceImage = popupPlace.querySelector(`.popup__image`);
const popupPlaceText = popupPlace.querySelector(".popup__text");

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

export function addnewCard(titleValue, imageValue) {
  const cardElement = elementsTemplate
    .querySelector(".element")
    .cloneNode(true);
  cardElement.querySelector(".element__title").textContent = titleValue;

  cardElement.querySelector(".element__image").src = imageValue;
  cardElement.querySelector(".element__image").alt = "image";
  cardElement
    .querySelector(".element__image")
    .addEventListener(`click`, function (evt) {
      evt.preventDefault();
      popupPlace.classList.add("popup_opened");
      popupPlaceImage.src = evt.target.src;
      popupPlaceImage.alt = "photo";
      popupPlaceText.textContent = titleValue;
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
export function renderCard(linkElement, titleElement) {
  cardsContainer.prepend(addnewCard(linkElement.value, titleElement.value));
}
for (let i = 0; i < initialCards.length; i++) {
  cardsContainer.prepend(
    addnewCard(initialCards[i].name, initialCards[i].link)
  );
}
