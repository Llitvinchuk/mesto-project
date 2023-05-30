export default class FormValidator {
  constructor(options, form) {
    this._options = options;
    this._form = form;
    this._contentPopups = Array.from(form.querySelectorAll(this._options.contentSelector));
    this._buttonSave = form.querySelector(this._options.submitButtonSelector);
  }

  _enableValidation() {
    this._setEventListener(this._form);  
  }

  _setEventListener(formElement) {
    this._setSaveButtonStatus(this._contentPopups, this._buttonSave, this._options);
    this._contentPopups.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement, this._options);
        this._setSaveButtonStatus(this._contentPopups, this._buttonSave, this._options);
      });
    });
  }

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

  _setSaveButtonStatus(contentPopups, button) {
    if (this._hasInvalidInput(contentPopups)) {
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

  _hasInvalidInput(contentPopups) {
    return contentPopups.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
