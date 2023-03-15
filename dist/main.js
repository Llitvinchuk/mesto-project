/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./src/pages/index.css\");\n\nvar popup = document.querySelector(\".popup_type_profile\");\nvar buttonEdit = document.querySelector(\".profile__edit-button\");\nvar buttonClose = document.querySelector(\".popup__close-button\");\nvar buttonAdd = document.querySelector(\".profile__add-button\");\nvar buttonCloseForma = document.querySelector(\".popup__cls-btn\");\nvar cardsContainer = document.querySelector(\".element-container\");\nvar placeClose = document.querySelector(\".place__close\");\nvar elementsTemplate = document.querySelector(\"#template-elements\").content;\nvar place = document.querySelector(\".popup_type_picture\");\nvar linkElement = document.querySelector(\"#forma-link\");\nvar titleElement = document.querySelector(\"#forma-title\");\nvar popupNewPlace = document.querySelector(\".popup-new-place\");\nvar popupCreateBtn = document.querySelector(\".popup__place-form\");\nvar popupContainer = document.querySelector(\".popup__container\");\nvar popupPlaceContainer = document.querySelector(\".popup__place-container\");\nfunction submitPlace(evt) {\n  evt.preventDefault();\n  renderCard(titleElement, linkElement);\n  closePopup(popupNewPlace);\n}\nfunction openPopup(popup) {\n  popup.classList.add(\"popup_opened\");\n}\nfunction closePopup(popup) {\n  popup.classList.remove(\"popup_opened\");\n}\nbuttonEdit.addEventListener(\"click\", function () {\n  openPopup(popup);\n});\nbuttonAdd.addEventListener(\"click\", function () {\n  openPopup(popupNewPlace);\n});\nbuttonClose.addEventListener(\"click\", function () {\n  closePopup(popup);\n});\nbuttonCloseForma.addEventListener(\"click\", function () {\n  closePopup(popupNewPlace);\n});\nfunction keyHandler(evt) {\n  if (evt.key === \"Enter\") {\n    closePopup(popup);\n  }\n}\npopup.addEventListener(\"click\", function () {\n  closePopup(popup);\n});\nplace.addEventListener(\"click\", function () {\n  place.classList.remove(\"place_active\");\n});\npopupNewPlace.addEventListener(\"click\", function () {\n  closePopup(popupNewPlace);\n});\npopupContainer.addEventListener(\"click\", function (evt) {\n  evt.stopPropagation();\n});\npopupPlaceContainer.addEventListener(\"click\", function (evt) {\n  evt.stopPropagation();\n});\nfunction PlaceHandler(evt) {\n  if (evt.key === \"Enter\") {\n    place.classList.remove(\"place_active\");\n    console.log(\"klskdfcm\");\n  }\n}\nplaceClose.addEventListener(\"click\", function () {\n  place.classList.remove(\"place_active\");\n});\n\n// Находим форму в DOM\nvar formElement = document.querySelector(\".popup__form\"); // Воспользуйтесь методом querySelector()\n// Находим поля формы в DOM\nvar nameInput = document.querySelector(\"#popup-title\"); // Воспользуйтесь инструментом .querySelector()\nvar jobInput = document.querySelector(\"#popup-info\"); // Воспользуйтесь инструментом .querySelector()\nvar popupContent = document.querySelector(\".popup__content\");\nvar profTitle = document.querySelector(\".profile__title\");\nvar profJob = document.querySelector(\".profile__subtitle\");\n// Обработчик «отправки» формы, хотя пока\n// она никуда отправляться не будет\nfunction editformSubmitHandler(evt) {\n  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.\n  // Так мы можем определить свою логику отправки.\n  // О том, как это делать, расскажем позже.\n\n  // Получите значение полей jobInput и nameInput из свойства value\n  profTitle.textContent = nameInput.value;\n  profJob.textContent = jobInput.value;\n\n  // Выберите элементы, куда должны быть вставлены значения полей\n  closePopup(popup);\n  // Вставьте новые значения с помощью textContent\n}\n// Прикрепляем обработчик к форме:\n// он будет следить за событием “submit” - «отправка»\nformElement.addEventListener(\"submit\", editformSubmitHandler);\nvar initialCards = [{\n  name: \"Архыз\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg\"\n}, {\n  name: \"Челябинская область\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg\"\n}, {\n  name: \"Иваново\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg\"\n}, {\n  name: \"Камчатка\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg\"\n}, {\n  name: \"Холмогорский район\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg\"\n}, {\n  name: \"Байкал\",\n  link: \"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg\"\n}];\npopupCreateBtn.addEventListener(\"submit\", submitPlace);\nfunction addnewCard(titleValue, imageValue) {\n  var cardElement = elementsTemplate.querySelector(\".element\").cloneNode(true);\n  cardElement.querySelector(\".element__title\").textContent = titleValue;\n  cardElement.querySelector(\".element__image\").src = imageValue;\n  cardElement.querySelector(\".element__image\").alt = \"image\";\n  cardElement.querySelector(\".element__image\").addEventListener(\"click\", function (evt) {\n    place.classList.add(\"place_active\");\n    place.querySelector(\".place__image\").src = evt.target.src;\n    place.querySelector(\".place__text\").textContent = titleValue;\n  });\n  cardElement.querySelector(\".element__like\").addEventListener(\"click\", function (evt) {\n    evt.target.classList.toggle(\"element__like_active\");\n  });\n  cardElement.querySelector(\".element__trash\").addEventListener(\"click\", function () {\n    cardElement.remove();\n  });\n  return cardElement;\n}\nfunction renderCard(linkElement, titleElement) {\n  cardsContainer.prepend(addnewCard(linkElement.value, titleElement.value));\n}\nfor (var i = 0; i < initialCards.length; i++) {\n  cardsContainer.prepend(addnewCard(initialCards[i].name, initialCards[i].link));\n}\nvar showInputError = function showInputError(formElement, popupContent, errorMessage) {\n  var errorElement = formElement.querySelector(\".\".concat(popupContent.id, \"-error\"));\n  errorElement.textContent = errorMessage;\n  console.log(\"🚀 ~ showInputError ~ errorElement\", errorElement);\n  console.log(\"🚀 ~ showInputError ~ popupContent.id\", popupContent.id);\n  errorElement.classList.add(\"popup-title-error_active\");\n};\nvar hideInputError = function hideInputError(formElement, popupContent) {\n  var errorElement = formElement.querySelector(\".\".concat(popupContent.id, \"-error\"));\n  errorElement.classList.remove(\"popup-title-error_active\");\n  errorElement.textContent = \"\";\n};\nvar checkInputValidity = function checkInputValidity(formElement, inputElement) {\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage);\n  } else {\n    hideInputError(formElement, inputElement);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement) {\n  var inputList = Array.from(formElement.querySelectorAll(\".popup__content\"));\n  var buttonElement = formElement.querySelector(\".popup__submit-button\");\n  toggleButtonState(inputList, buttonElement);\n  inputList.forEach(function (popupContent) {\n    popupContent.addEventListener(\"input\", function () {\n      checkInputValidity(formElement, popupContent);\n      toggleButtonState(inputList, buttonElement);\n    });\n  });\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (popupContent) {\n    return !popupContent.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement) {\n  // Если есть хотя бы один невалидный инпут\n  if (hasInvalidInput(inputList)) {\n    buttonElement.classList.add(\"popup__submit-button_disabled\");\n  } else {\n    buttonElement.classList.remove(\"popup__submit-button_disabled\");\n  }\n};\nvar enableValidation = function enableValidation() {\n  var formList = Array.from(document.querySelectorAll(\".popup__form\"));\n  formList.forEach(function (formElement) {\n    setEventListeners(formElement);\n  });\n};\nenableValidation();\n\n//# sourceURL=webpack://mesto-project/./src/index.js?");

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project/./src/pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;