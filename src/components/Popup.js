const popupElement = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close");

export class Popup {
  constructor(selector) {
    this._selector = selector;
  }
  _getElement() {}
  open() {
    popupElement.classList.add("popup_opened");
  }
  close() {
    popupElement.classList.remove("popup_is-opened");
  }
  _handleEscClose() {
    this.popupElement.addEventListener("keydown", (event) => {
      if (evt.key === "Escape") {
        this.close();
      }
    });
  }
  setEventListeners() {
    popupCloseButton.addEventListener("click", () => {
      this.close();
    });
  }
}
