import Api from "./Api";
import Card from "./Card";

export default class Section {
  constructor(api, containerSelector) {
    this.api = api;
    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  _clear() {
    this._container.innerHTML = "";
  }

  renderItems() {
    this._clear();

    this.api?.getInitialCards().then((data) => {
      if (!data?.length) {
        return;
      }

      for (const item of data) {
        console.log(`🚀 ~ this.api?.getInitialCards ~ item:`, item);
        const card = new Card({ data: item, container: this._container });
        const cardElement = card.render();
        this.addItem(cardElement);
      }
    });
  }
}
