import { Popup } from "./Popup";
const popupPlaceImage = document.querySelector(".popup__image");
const popupPlaceText = popupPlace.querySelector(".popup__text");

export class PopupWithImage extends Popup {
  constructor(data, selector) {
    super(selector);
    this._link = data.link;
    this._alt = data.alt;
    this._name = data.name;
  }
  open() {
    super.open();
  }
  close() {
    super.close();
  }
}
