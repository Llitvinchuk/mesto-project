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

/***/ "./src/components/api.js":
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"addNewCard\": () => (/* binding */ addNewCard),\n/* harmony export */   \"deleteCard\": () => (/* binding */ deleteCard),\n/* harmony export */   \"deleteLike\": () => (/* binding */ deleteLike),\n/* harmony export */   \"editAvatar\": () => (/* binding */ editAvatar),\n/* harmony export */   \"editProfile\": () => (/* binding */ editProfile),\n/* harmony export */   \"getInitialCards\": () => (/* binding */ getInitialCards),\n/* harmony export */   \"getUserData\": () => (/* binding */ getUserData)\n/* harmony export */ });\nvar config = {\n  baseUrl: \"https://nomoreparties.co/v1/plus-cohort-23\",\n  headers: {\n    authorization: \"828dfec4-4859-48aa-a7be-cfe17041058c\",\n    \"Content-Type\": \"application/json\"\n  }\n};\nvar checkReply = function checkReply(res) {\n  if (res.ok) {\n    return res.json();\n  }\n  return Promise.reject(\"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430: \".concat(res.status));\n};\nvar getUserData = function getUserData() {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    headers: config.headers\n  }).then(checkReply);\n};\nvar getInitialCards = function getInitialCards() {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    headers: config.headers\n  }).then(checkReply);\n};\nvar editProfile = function editProfile(name, about) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      about: about\n    })\n  }).then(checkReply);\n};\nvar addNewCard = function addNewCard(link, name) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards\"), {\n    method: \"POST\",\n    headers: config.headers,\n    body: JSON.stringify({\n      name: name,\n      link: link\n    })\n  }).then(checkReply);\n};\nvar deleteCard = function deleteCard(card) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/\").concat(card._id), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(checkReply);\n};\nvar addLike = function addLike(card) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(card._id), {\n    method: \"PUT\",\n    headers: config.headers\n  }).then(checkReply);\n};\nvar deleteLike = function deleteLike(card) {\n  return fetch(\"\".concat(config.baseUrl, \"/cards/likes/\").concat(card._id), {\n    method: \"DELETE\",\n    headers: config.headers\n  }).then(checkReply);\n};\nvar editAvatar = function editAvatar(photo) {\n  return fetch(\"\".concat(config.baseUrl, \"/users/me/avatar\"), {\n    method: \"PATCH\",\n    headers: config.headers,\n    body: JSON.stringify({\n      avatar: photo\n    })\n  }).then(checkReply);\n};\n\n//# sourceURL=webpack://mesto-project/./src/components/api.js?");

/***/ }),

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardsContainer\": () => (/* binding */ cardsContainer),\n/* harmony export */   \"createCards\": () => (/* binding */ createCards)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/components/modal.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n\n\nvar cardsContainer = document.querySelector(\".element-container\");\nfunction cancelCard(card) {\n  var element = card.closest(\".element\");\n  element.remove();\n}\nfunction createCards(data, user) {\n  var elementsTemplate = document.querySelector(\"#template-elements\").content;\n  var cardElement = elementsTemplate.querySelector(\".element\").cloneNode(true);\n  var elementTitle = cardElement.querySelector(\".element__title\");\n  var elementImage = cardElement.querySelector(\".element__image\");\n  var elementTrash = cardElement.querySelector(\".element__trash\");\n  var elementLike = cardElement.querySelector(\".element__like\");\n  var likeCounter = cardElement.querySelector(\".element__like-counter\");\n  var popupPlace = document.querySelector(\".popup_type_picture\");\n  var popupPlaceImage = popupPlace.querySelector(\".popup__image\");\n  var popupPlaceText = popupPlace.querySelector(\".popup__text\");\n  var likes = data.likes.length;\n  likeCounter.textContent = likes;\n  elementTitle.textContent = data.name;\n  elementImage.src = data.link;\n  elementImage.alt = data.name;\n  if (user._id === data.owner._id) {\n    elementTrash.classList.add(\"element__trash_active\");\n    elementTrash.addEventListener(\"click\", function () {\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.deleteCard)(data._id).then(function () {\n        cancelCard(elementTrash);\n      }).catch(function (err) {\n        console.error(err);\n      });\n    });\n  }\n  data.likes.forEach(function (like) {\n    if (like._id === user._id) {\n      elementLike.classList.add(\"element__like_active\");\n    }\n  });\n  elementImage.addEventListener(\"click\", function (evt) {\n    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openPopup)(popupPlace);\n    popupPlaceImage.src = data.link;\n    popupPlaceImage.alt = data.name;\n    popupPlaceText.textContent = data.name;\n  });\n  elementLike.addEventListener(\"click\", function () {\n    if (elementLike.classList.contains(\"element__like_active\")) {\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.deleteLike)(data).then(function (data) {\n        likeCounter.textContent = data.likes.length;\n        elementLike.classList.remove(\"element__like_active\");\n      }).catch(function (err) {\n        console.error(err);\n      });\n    } else {\n      (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.addLike)(data).then(function (data) {\n        likeCounter.textContent = data.likes.length;\n        elementLike.classList.add(\"element__like_active\");\n      }).catch(function (err) {\n        console.error(err);\n      });\n    }\n  });\n  elementTrash.addEventListener(\"click\", function (e) {\n    (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.deleteCard)(data).then(function () {\n      cardElement.remove();\n    }).catch(function (err) {\n      console.error(err);\n    });\n  });\n  return cardElement;\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/card.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate.js */ \"./src/components/validate.js\");\n/* harmony import */ var _card_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.js */ \"./src/components/card.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./src/components/modal.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nvar profilePopup = document.querySelector(\".popup_type_profile\");\nvar popupSubmit = document.querySelector(\".popup__submit-button\");\nvar buttonEdit = document.querySelector(\".profile__edit-button\");\nvar buttonClose = document.querySelector(\".popup__close-button\");\nvar buttonAdd = document.querySelector(\".profile__add-button\");\nvar linkElement = document.querySelector(\"#forma-link\");\nvar titleElement = document.querySelector(\"#forma-title\");\nvar popupNewPlace = document.querySelector(\".popup-new-place\");\nvar popupCreateBtn = document.querySelector(\".popup__place-form\");\nvar formElement = document.querySelector(\".popup__form-profile\"); // Воспользуйтесь методом querySelector()\nvar nameInput = document.querySelector(\"#popup-title\"); // Воспользуйтесь инструментом .querySelector()\nvar jobInput = document.querySelector(\"#popup-info\");\nvar profTitle = document.querySelector(\".profile__title\");\nvar profSubtitle = document.querySelector(\".profile__subtitle\");\nvar profJob = document.querySelector(\".profile__subtitle\");\nvar profAvatar = document.querySelector(\".profile__avatar\");\nvar popups = document.querySelectorAll(\".popup\");\nvar popupAvatar = document.querySelector(\".popup__avatar\");\nvar popupFormAvatar = document.querySelector(\".popup__form-avatar\");\nvar avatarName = document.querySelector(\".popup__form-avatar\").querySelector(\".popup__content\");\nvar avatarSubmit = document.querySelector(\".popup__submit-button\");\nvar cardSubmit = document.querySelector(\".popup__submit-button\");\nvar user = {};\nPromise.all([(0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getUserData)(), (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.getInitialCards)()]).then(function (_ref) {\n  var _ref2 = _slicedToArray(_ref, 2),\n    dataUser = _ref2[0],\n    cards = _ref2[1];\n  user = dataUser;\n  profTitle.textContent = user.name;\n  profSubtitle.textContent = user.about;\n  profAvatar.src = user.avatar;\n  cards.reverse().forEach(function (data) {\n    _card_js__WEBPACK_IMPORTED_MODULE_2__.cardsContainer.prepend((0,_card_js__WEBPACK_IMPORTED_MODULE_2__.createCards)(data, user));\n  });\n}).catch(function (err) {\n  console.error(err);\n});\nfunction redactionProfile(evt) {\n  evt.preventDefault();\n  popupSubmit.textContent = \"Сохранение...\";\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.editProfile)(nameInput.value, jobInput.value).then(function () {\n    profTitle.textContent = nameInput.value;\n    profSubtitle.textContent = jobInput.value;\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(profilePopup);\n  }).catch(function (err) {\n    console.error(err);\n  }).finally(function () {\n    popupSubmit.textContent = \"Сохранить\";\n  });\n}\nfunction changeAvatar(evt) {\n  evt.preventDefault();\n  avatarSubmit.textContent = \"Сохранение...\";\n  var avatar = avatarName.value;\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.editAvatar)(avatar).then(function (item) {\n    profAvatar.src = item.avatar;\n    evt.target.reset();\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupAvatar);\n  }).catch(function (err) {\n    console.error(err);\n  }).finally(function () {\n    avatarSubmit.textContent = \"Сохранить\";\n  });\n}\nfunction createNewCard(evt) {\n  evt.preventDefault();\n  cardSubmit.textContent = \"Создание...\";\n  (0,_api_js__WEBPACK_IMPORTED_MODULE_4__.addNewCard)(linkElement.value, titleElement.value).then(function (data) {\n    _card_js__WEBPACK_IMPORTED_MODULE_2__.cardsContainer.prepend((0,_card_js__WEBPACK_IMPORTED_MODULE_2__.createCards)(data, user));\n    evt.target.reset();\n    (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popupNewPlace);\n  }).catch(function (err) {\n    console.error(err);\n  }).finally(function () {\n    cardSubmit.textContent = \"Создать\";\n  });\n}\nbuttonEdit.addEventListener(\"click\", function () {\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(profilePopup);\n  nameInput.value = profTitle.textContent;\n  jobInput.value = profJob.textContent;\n});\nbuttonAdd.addEventListener(\"click\", function () {\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupNewPlace);\n});\nprofAvatar.addEventListener(\"click\", function () {\n  (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.openPopup)(popupAvatar);\n});\nvar validationSetup = {\n  formSelector: \".popup__form\",\n  contentSelector: \".popup__content\",\n  submitButtonSelector: \".popup__submit-button\",\n  disabledButton: \"popup__submit-button_disabled\",\n  titleError: \"popup-title-error_active\"\n};\npopups.forEach(function (popup) {\n  popup.addEventListener(\"mousedown\", function (evt) {\n    if (evt.target.classList.contains(\"popup_opened\")) {\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popup);\n    }\n    if (evt.target.classList.contains(\"popup__close\")) {\n      (0,_modal_js__WEBPACK_IMPORTED_MODULE_3__.closePopup)(popup);\n    }\n  });\n});\nformElement.addEventListener(\"submit\", redactionProfile);\npopupCreateBtn.addEventListener(\"submit\", createNewCard);\npopupFormAvatar.addEventListener(\"submit\", changeAvatar);\n(0,_validate_js__WEBPACK_IMPORTED_MODULE_1__.enableValidation)(validationSetup);\n\n//# sourceURL=webpack://mesto-project/./src/components/index.js?");

/***/ }),

/***/ "./src/components/modal.js":
/*!*********************************!*\
  !*** ./src/components/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closePopup\": () => (/* binding */ closePopup),\n/* harmony export */   \"openPopup\": () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction closeByEscape(evt) {\n  if (evt.key === \"Escape\") {\n    closePopup(document.querySelector(\".popup_opened\"));\n  }\n}\nfunction openPopup(popup) {\n  popup.classList.add(\"popup_opened\");\n  document.addEventListener(\"keydown\", closeByEscape);\n}\nfunction closePopup(popup) {\n  popup.classList.remove(\"popup_opened\");\n  document.removeEventListener(\"keydown\", closeByEscape);\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/modal.js?");

/***/ }),

/***/ "./src/components/validate.js":
/*!************************************!*\
  !*** ./src/components/validate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableValidation\": () => (/* binding */ enableValidation),\n/* harmony export */   \"resetButton\": () => (/* binding */ resetButton)\n/* harmony export */ });\nvar showInputError = function showInputError(formElement, popupContent, errorMessage, settings) {\n  var errorElement = formElement.querySelector(\".\".concat(popupContent.id, \"-error\"));\n  errorElement.textContent = errorMessage;\n  errorElement.classList.add(settings.titleError);\n};\nvar hideInputError = function hideInputError(formElement, popupContent, settings) {\n  var errorElement = formElement.querySelector(\".\".concat(popupContent.id, \"-error\"));\n  errorElement.classList.remove(settings.titleError);\n  errorElement.textContent = \"\";\n};\nvar checkInputValidity = function checkInputValidity(formElement, inputElement, settings) {\n  if (!inputElement.validity.valid) {\n    showInputError(formElement, inputElement, inputElement.validationMessage, settings);\n  } else {\n    hideInputError(formElement, inputElement, settings);\n  }\n};\nvar setEventListeners = function setEventListeners(formElement, settings) {\n  var inputList = Array.from(formElement.querySelectorAll(settings.contentSelector));\n  var buttonElement = formElement.querySelector(settings.submitButtonSelector);\n  toggleButtonState(inputList, buttonElement, settings);\n  formElement.addEventListener(\"reset\", function () {\n    setTimeout(function () {\n      toggleButtonState(inputList, buttonElement, settings);\n    }, 0);\n  });\n  inputList.forEach(function (popupContent) {\n    popupContent.addEventListener(\"input\", function () {\n      checkInputValidity(formElement, popupContent, settings);\n      toggleButtonState(inputList, buttonElement, settings);\n    });\n  });\n};\nvar hasInvalidInput = function hasInvalidInput(inputList) {\n  return inputList.some(function (popupContent) {\n    return !popupContent.validity.valid;\n  });\n};\nvar toggleButtonState = function toggleButtonState(inputList, buttonElement, settings) {\n  // Если есть хотя бы один невалидный инпут\n  if (hasInvalidInput(inputList)) {\n    buttonElement.disabled = true;\n    buttonElement.classList.add(settings.disabledButton);\n  } else {\n    buttonElement.disabled = false;\n    buttonElement.classList.remove(settings.disabledButton);\n  }\n};\nvar enableValidation = function enableValidation(settings) {\n  var formList = Array.from(document.querySelectorAll(settings.formSelector));\n  formList.forEach(function (formElement) {\n    setEventListeners(formElement, settings);\n  });\n};\nfunction resetButton(button) {\n  button.disabled = true;\n  button.classList.add(\"disabled\");\n}\n\n//# sourceURL=webpack://mesto-project/./src/components/validate.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/index.js");
/******/ 	
/******/ })()
;