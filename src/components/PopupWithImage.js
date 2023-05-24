import { Popup } from "./Popup";
const popupPlaceImage = document.querySelector(".popup__image");
const popupPlaceText = popupPlace.querySelector(".popup__text");

class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }
  open() {
    super.open();
    popupPlaceImage.src = data.link;
    popupPlaceImage.alt = data.name;
    popupPlaceText.textContent = data.name;
  }
}
