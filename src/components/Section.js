import Api from "./Api";
import Card from "./Card";

export default class Section {
  constructor({ api, selector }) {
    this._api = new Api();
    this._container = document.querySelector(selector);
  }

  addItem(element) {
    this._container.append(element);
  }

  _clear() {
    this._container.innerHTML = "";
  }

  render() {
    this._clear();

    this._api?.getInitialCards().then((data) => {
      if (!data?.length) {
        return;
      }

      for (const item of data) {
        const card = new Card({
          data: item,
          container: this._container,
          api: this._api,
        });
        const cardElement = card.render();
        this.addItem(cardElement);
      }
    });
  }
}
