import Api from "./Api";
import Card from "./Card";

export default class Section {
  constructor({ api, selector, me }) {
    this._api = new Api();
    this._container = document.querySelector(selector);
    this._me = me;
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
          me: this._me,
        });
        const cardElement = card.render();
        this.addItem(cardElement);
      }
    });
  }
}
