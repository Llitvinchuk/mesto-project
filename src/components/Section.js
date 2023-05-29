import Api from "./Api";
import Card from "./sdfsdCard";

const api = new Api({
    baseUrl: "https://nomoreparties.co/v1/plus-cohort-23",
    headers: {
        authorization: "828dfec4-4859-48aa-a7be-cfe17041058c",
        "Content-Type": "application/json",
    },
});
export default class Section {
    constructor(containerSelector) {
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.append(element);
    }

    _clear() {
        this._container.innerHTML = '';
    }

    renderItems() {
        this._clear();

        api.getInitialCards().then(data => {
            this.items = data;

            const card = new Card(item, ".template-elements");
            const cardElement = card.render();
            this.addItem(cardElement)
        })

    }
}