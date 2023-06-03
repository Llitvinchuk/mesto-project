export default class Card {
  constructor({
    data,
    userId,
    handleLike,
    handleCardClick,
    handleLikeCard,
    handleDeleteCard,
  }) {
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleLikeCard = handleLikeCard;
    this._handleDeleteCard = handleDeleteCard;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._name = data.name;
    this._likes = data.likes;
    this._link = data.link;
    this._handleLike = handleLike;
  }

  _getElement() {
    this._elementsTemplate = document
      .querySelector("#template-elements")
      .content.querySelector(".element")
      .cloneNode(true);
  }

  render() {
    this._getElement();
    this._elementImage =
      this._elementsTemplate.querySelector(".element__image");
    this._elementImage.src = this._link;
    this._elementImage.alt = this._name;
    this._elementsTemplate.querySelector(".element__title").textContent =
      this._name;
    this._elementsTemplate.querySelector(".element__like-counter").textContent =
      this._likes.length;

    if (this._userId === this._ownerId) {
      this._elementsTemplate
        .querySelector(".element__trash")
        .classList.add("element__trash_active");
    }

    if (this._likes.find((obj) => this._userId === obj._id)) {
      this._elementsTemplate
        .querySelector(".element__like")
        .classList.add("element__like_active");
    }

    this._elementsTemplate
      .querySelector(".element__image")
      .addEventListener(`click`, () => {
        this._handleCardClick({
          name: this._name,
          link: this._link,
        });
      });

    this._elementsTemplate
      .querySelector(".element__like")
      .addEventListener("click", () => {
        this._handleLikeCard();
      });
    this._elementsTemplate
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    return this._elementsTemplate;
  }

  handleLikeCard() {
    const elementLike = this._elementsTemplate.querySelector(".element__like");
    const likeCounter = this._elementsTemplate.querySelector(
      ".element__like-counter"
    );

    if (elementLike.classList.contains("element__like_active")) {
      this._handleLike(this);
    } else {
      this._handleLike(this);
    }
  }
  handleRemoveCard() {
    this._elementsTemplate.remove();
  }
}
