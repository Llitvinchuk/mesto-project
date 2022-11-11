
const popup = document.querySelector('.popup_type_profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close-button');
const buttonAdd = document.querySelector('.profile__add-button')
const buttonCloseForma = document.querySelector('.popup__cls-btn');
const cardsContainer = document.querySelector('.element-container')
const placeClose = document.querySelector('.place__close')
const elementsTemplate = document.querySelector('#template-elements').content;
const place = document.querySelector('.popup_type_picture')
const linkElement = document.querySelector('#forma-link')
const titleElement = document.querySelector('#forma-title')
const popupNewPlace = document.querySelector('.popup-new-place')
const popupCreateBtn = document.querySelector('.popup__place-form')



function submitPlace(evt) {
  evt.preventDefault();
  renderCard(titleElement, linkElement);
  closePopup(popupNewPlace);
}
function openPopup(popup) {
  popup.classList.add('popup_opened');
} 
function closePopup(popup) {
  popup.classList.remove('popup_opened');
} 
buttonEdit.addEventListener('click', function () {
  openPopup(popup)
  });
buttonAdd.addEventListener('click', function () {
  openPopup(popupNewPlace)
});
buttonClose.addEventListener('click', function () {
  closePopup(popup)
  });
buttonCloseForma.addEventListener('click', function () {
  closePopup(popupNewPlace)
  });

placeClose.addEventListener('click', function () {
  place.classList.remove(`place_active`)
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
function editformSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profTitle.textContent = nameInput.value;
    profJob.textContent = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
    closePopup(popup)
    // Вставьте новые значения с помощью textContent
}
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', editformSubmitHandler); 
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
popupCreateBtn.addEventListener('submit', submitPlace);

function addnewCard(titleValue, imageValue) {
  const cardElement = elementsTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__title').textContent = titleValue;

  cardElement.querySelector('.element__image').src = imageValue;
  cardElement.querySelector('.element__image').alt = 'image';
  cardElement.querySelector('.element__image').addEventListener(`click`, function (evt) {
    
    place.classList.add('place_active');
    place.querySelector(`.place__image`).src = evt.target.src

    place.querySelector('.place__text').textContent = titleValue;
  })
  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');

}); 
cardElement.querySelector('.element__trash').addEventListener('click', function () {
  cardElement.remove();
}); 

 return cardElement;
}
function renderCard(linkElement, titleElement) {
  cardsContainer.prepend(addnewCard(linkElement.value, titleElement.value));

}
for (let i = 0;i < initialCards.length; i++) {
  cardsContainer.prepend(addnewCard(initialCards[i].name, initialCards[i].link))

}
