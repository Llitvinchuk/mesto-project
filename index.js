let popupContainer = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = document.querySelector('.popup__close-button');
let formaContainer =  document.querySelector('.forma');
let addButton = document.querySelector('.profile__add-button')
let closeButtonForma = document.querySelector('.forma__close-button');
let addCards = document.querySelector('.forma__create-button')
let cardContainer = document.querySelector('.elements')

function activePopup() {
    popupContainer.classList.remove('popup_disabled'); 
}
function disabledPopup() {
    popupContainer.classList.add('popup_disabled'); 
}
function activeForma() {
    formaContainer.classList.remove('forma_disabled'); 

}
function disabledForma() {
    formaContainer.classList.add('forma_disabled'); 
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


  initialCards.forEach(function (element) {
    let cardElement = document.querySelector('.element').content;
    const cardTemplate = cardElement.querySelector('').cloneNode(true);
    console.log('hghy')
    cardTemplate.querySelector('.element__image').src = element.src;
    cardTemplate.querySelector('.element__title').textContent = element.title;
    cardTemplate.querySelector('.element__button').addEventListener('click', function (evt) {
            evt.target.classList.toggle('.element__button_active');
    });
    cardTemplate.querySelector('.element__trash').addEventListener('click', function () {
        cardTemplate.remove()
    });
    cardContainer.prepend(cardTemplate);
  });

//   function addCard(imageValue, titleValue) {
//     const cardElement = document.querySelector('.element').cloneNode(true);
//     cardElement.querySelector('.element__image').src = imageValue;
//     cardElement.querySelector('.element__title').textContent = titleValue;
//     cardElement.querySelector('.element__button').addEventListener('click', function (evt) {
//       evt.target.classList.toggle('.element__button_active');
//   });

//     return cardElement;

//   }
// addCards.addEventListener('click', () => {

//     addCard(imageValue, titleValue);
//     cardContainer.prepend(addCard(cardElement));
//     });
