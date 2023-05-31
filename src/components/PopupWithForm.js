import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(selector, callbackForm) {
    super(selector);
    this._callbackForm = callbackForm;
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._popupButtonSubmit = this._popupElement.querySelector(
      ".popup__submit-button"
    );
    this._popupInputs = this._popupForm.querySelectorAll(".popup__content");
    this._popupButtonSubmitTextContent = this._popupButtonSubmit.textContent;

    this.setEventListeners();
  }

  _getInputValues() {
    this._value = {};
    this._popupInputs.forEach((inputElement) => {
      this._value[inputElement.name] = inputElement.value;
    });

    return this._value;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const data = this._getInputValues();
      this._callbackForm(data, this);
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
  setLoading(isLoading) {
    if (isLoading) {
      this._popupButtonSubmit.textContent = "Сохранение...";
    } else {
      this._popupButtonSubmit.textContent = this._popupButtonSubmitTextContent;
    }
  }
}
