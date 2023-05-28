export class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
    this._closePopupBtn = this._popupElement.querySelector(".popup__close");
  }
  _getElement() {
    this._element = document.querySelector(this._selector);
    return this._element;
  }
  open() {
    this._popupElement.classList.add("popup_opened");
    document.addEventListener("keyup", this._handleEscClose);
  }
  close() {
    this._popupElement.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }
  _handleEscClose() {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  setEventListeners() {
    this._closePopupBtn.addEventListener("click", () => {
      this.close();
    });
  }
}
