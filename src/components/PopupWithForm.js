import { Popup } from "./Popup";

export class PopupWithForm extends Popup {
  constructor(selector, callbackForm) {
    super(selector);
    this._callbackForm = callbackForm;
    this._popupForm = this._popupElement.querySelector(".popup__form");
    this._popupButtonSubmit = this._popupElement.querySelector(
      ".popup__submit-button"
    );
    this._popupInput = this._popupForm.querySelectorAll(".popup__content");

    this.setEventListeners();
  }

  _getInputValues() {
    this._value = {};
    this._popupInput.forEach((inputElement) => {
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
}
