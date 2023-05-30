export class Popup {
  constructor(selector) {
    this._popupElement = document.querySelector(selector);
    this._closePopupBtn = this._popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
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
    this._popupElement.classList.remove("popup_opened");
    document.removeEventListener("keyup", this._handleEscClose);
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _hanldeOverlayClose(evt) {
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }

  setEventListeners() {
    this._closePopupBtn.addEventListener("click", () => {
      this.close();
    });
    this._popupElement.addEventListener(
      "click",
      this._hanldeOverlayClose.bind(this)
    );
  }
}
