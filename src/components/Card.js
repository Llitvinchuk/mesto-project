import Api from "./Api";

export default class Card {
  constructor({ data, me, handleCardClick, container, api, cardSelector }) {
    this._api = new Api();

    this._me = me;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;

    this.container = container;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._name = data.name;
    this._likes = data.likes;
    this._link = data.link;
  }

  _getElement() {
    this._elementsTemplate = document
      .querySelector(this._cardSelector)
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

    if (this._me?.data?._id === this._ownerId) {
      this._elementsTemplate
        .querySelector(".element__trash")
        .classList.add("element__trash_active");

      this._elementsTemplate
        .querySelector(".element__trash")
        .addEventListener("click", (evt) => {
          this._api
            .deleteCard(this._id)
            .then(() => {
              evt.target.closest(".element").remove();
            })
            .catch((err) => {
              console.error(err);
            });
        });
    }

    this.handleLikeCard();

    if (this._likes.find((obj) => this._me?.data?._id === obj._id)) {
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

    return this._elementsTemplate;
  }

  handleLikeCard() {
    const elementLike = this._elementsTemplate.querySelector(".element__like");
    const likeCounter = this._elementsTemplate.querySelector(
      ".element__like-counter"
    );

    elementLike.addEventListener("click", () => {
      if (elementLike.classList.contains("element__like_active")) {
        this._api
          .deleteLike(this._id)
          .then((data) => {
            likeCounter.textContent = data.likes.length;
            elementLike.classList.remove("element__like_active");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        this._api
          .addLike(this._id)
          .then((data) => {
            likeCounter.textContent = data.likes.length;
            elementLike.classList.add("element__like_active");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  }
  handleRemoveCard() {
    this._elementsTemplate
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._api
          .deleteCard(this._id)
          .then(() => {
            this._elementsTemplate.closest(".elements__card").remove();
          })
          .catch((err) => {
            console.error(err);
          });
      });
  }
}
