// import { initialCards } from "./data.js";
let popupContainer = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let formaContainer =  document.querySelector('.forma');
let addButton = document.querySelector('.profile__add-button')
let closeButtonForma = document.querySelector('.forma__close-button');
let addCards = document.querySelector('.forma__create-button')
let cardsContainer = document.querySelector('.element-container')
let closePlace = document.querySelector('.place__close')

function activePopup() {
    popupContainer.classList.add('popup_active'); 
}
function disabledPopup() {
    popupContainer.classList.remove('popup_active'); 
}
function activeForma() {
    formaContainer.classList.add('forma_active'); 

}
function disabledForma() {
    formaContainer.classList.remove('forma_active'); 
}
editButton.addEventListener('click', function () {
    activePopup()
  });
addButton.addEventListener('click', function () {
    activeForma()
});
closeButton.addEventListener('click', function () {
    disabledPopup()
  });
closeButtonForma.addEventListener('click', function () {
    disabledForma()
  });
  addCards.addEventListener(`click`, function() {
    addnewCard()
  })
closePlace.addEventListener('click', function () {
  let place = document.querySelector('.place');
  place.classList.remove(`place_active`)
  place.classList.add(`place_disabled`)
})
  // Находим форму в DOM
const formElement = document.querySelector('.popup__form')// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
const nameInput = document.querySelector('#popup-title')// Воспользуйтесь инструментом .querySelector()
const jobInput = document.querySelector('#popup-info')// Воспользуйтесь инструментом .querySelector()
let popupContent = document.querySelector('.popup__content')
const profTitle = document.querySelector('.profile__title');
const profJob = document.querySelector('.profile__subtitle');
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profTitle.textContent = nameInput.value;
    profJob.textContent = jobInput.value;
    nameInput.value = '';
    jobInput.value = '';
    // Выберите элементы, куда должны быть вставлены значения полей
    disabledPopup()
    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
function addnewCard(titleValue, imageValue) {
  const elementsTemplate = document.querySelector('#template-elements').content;
  const cardElement = elementsTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = titleValue;

  cardElement.querySelector('.element__image').src = imageValue;
  cardElement.querySelector('.element__image').addEventListener(`click`, function (evt) {
    let place = document.querySelector('.place')
    place.classList.add('place_active')
    place.querySelector(`.place__image`).src = evt.target.src

    place.querySelector('.place__text').innerHTML = titleValue;
  })
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');

}); 
cardElement.querySelector('.element__trash').addEventListener('click', function () {
  cardElement.remove();

}); 

  cardsContainer.prepend(cardElement)
  disabledForma();
  // добавьте songElement название песни
}
for (let i = 0;i < initialCards.length; i++) {
  addnewCard(initialCards[i].name, initialCards[i].link)
}
