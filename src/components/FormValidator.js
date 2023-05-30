export default class FormValidator {
  constructor(options) {
    this._options = options;
  }

  _enableValidation() {
    const formList = Array.from(
      document.querySelectorAll(this._options.formSelector)
    );
    formList.forEach((formElement) => {
      this._setEventListener(formElement);
    });
  }

  _setEventListener(formElement) {
    const contentSelector = Array.from(
      formElement.querySelectorAll(this._options.contentSelector)
    );
    const buttonSave = formElement.querySelector(
      this._options.submitButtonSelector
    );
    this._setSaveButtonStatus(contentSelector, buttonSave, this._options);
    contentSelector.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, this._options);
        this._setSaveButtonStatus(contentSelector, buttonSave, this._options);
      });
    });
  }

<<<<<<< HEAD:src/components/FormValidator.js
	_checkInputValidity(form, input){
		// const isValid = input.validity.valid
		// if (input.validity.patternMismatch) {
		// 	input.setCustomValidity(input.dataset.errorMessage);
	  // }
	  // else if(input.validity.typeMismatch){
	  // 	input.setCustomValidity(input.dataset.errorMessageUrl);
	  // }
	  // else if(input.validity.tooShort){
	  //   input.setCustomValidity(input.dataset.errorMessageShort);
	  // }
	  // else {
	  // 	input.setCustomValidity("");
	  // };
		  if(!input.validity.valid){
	    this._showError(input, form, input.dataset.errorMessage, this._options);
	  } else{
	    this._hideError(input, form, this._options);
	  }
	}
=======
  _checkInputValidity(form, input) {
    const isValid = input.validity.valid;
    if (input.validity.patternMismatch) {
      input.setCustomValidity(input.dataset.errorMessage);
    } else if (input.validity.typeMismatch) {
      input.setCustomValidity(input.dataset.errorMessageUrl);
    } else if (input.validity.tooShort) {
      input.setCustomValidity(input.dataset.errorMessageShort);
    } else {
      input.setCustomValidity("");
    }
    if (!input.validity.valid) {
      this._showError(input, form, input.dataset.errorMessage, this._options);
    } else {
      this._hideError(input, form, this._options);
    }
  }
>>>>>>> c1f36bb1847ab839140b01d722556ee97a785a2c:src/components/util/FormValidator.js

  _showError(input, form, errorMessage) {
    const errorSpan = form.querySelector(
      `.${input.id}-` + this._options.titleError
    );
    input.classList.add(this._options.titleErrorActive);
    errorSpan.classList.add(this._options.titleErrorActive);
    errorSpan.textContent = errorMessage;
  }

  _hideError(input, form) {
    const errorSpan = form.querySelector(
      `.${input.id}-` + this._options.titleError
    );
    input.classList.remove(this._options.titleErrorActive);
    errorSpan.textContent = "";
    errorSpan.classList.remove(this._options.titleErrorActive);
  }

  _setSaveButtonStatus(contentSelector, button) {
    if (this._hasInvalidInput(contentSelector)) {
      button.setAttribute("disabled", true);
      button.classList.add(this._options.submitButtonDeactive);
    } else {
      button.removeAttribute("disabled");
      button.classList.remove(this._options.submitButtonDeactive);
    }
  }

  _disableButton(popup) {
    const buttonSave = popup.querySelector(this._options.submitButtonSelector);
    buttonSave.setAttribute("disabled", true);
    buttonSave.classList.add(this._options.submitButtonDeactive);
  }

  _hasInvalidInput(contentSelector) {
    return contentSelector.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
