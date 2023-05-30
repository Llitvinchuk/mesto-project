export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  _clear() {
    this._container.innerHTML = "";
  }

  render(arr) {
    this._clear();
    arr.forEach((item) => this._renderer(item));
  }
}
