import { Popup } from "./Popup";

export class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupImage = this._popupElement.querySelector(".popup__image");
    this._popupText = this._popupElement.querySelector(".popup__text");
  }
  open(data) {
    super.open();
    this._popupImage.src = data.link;
    this._popupText.alt = data.alt;
    this._popupText.textContent = data.name;
  }
  close() {
    super.close();
  }
}
