
import Api from "./hhdjddjApi";

export default class Card {
  constructor(data, userId, handleCardClick) {
    console.log(`🚀 ~ constructor ~ data:`, data);
    this._api = new Api({
      baseUrl: "https://nomoreparties.co/v1/plus-cohort-23",
      headers: {
        authorization: "828dfec4-4859-48aa-a7be-cfe17041058c",
        "Content-Type": "application/json",
      },
    });
    this._handleCardClick = handleCardClick;

    this._id = data._id; // id карточки
    this._ownerId = data.owner._id; // id создателя карточки
    this._userId = userId;
    this._name = data.name;
    this._likes = data.likes;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
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
    // const elementTrash = this._element.querySelector(".element__trash");
    // const elementLike = this._element.querySelector(".element__like");
    this._elementsTemplate.querySelector(".element__like-counter").textContent =
      this._likes.length;
    // const popupPlace = document.querySelector(".popup_type_picture");
    // const popupPlaceImage = this._element.querySelector(`.popup__image`);
    // const popupPlaceText = this._element.querySelector(".popup__text");
    // const likes = data.likes.length;
    if (this._userId === this._ownerId) {
      this._elementsTemplate
        .querySelector(".element__trash")
        .classList.add("element__trash_active");
      this._elementsTemplate
        .querySelector(".element__trash")
        .addEventListener("click", function (evt) {
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

    const parentContainer = document.querySelector(".element-container");

    parentContainer.append(this._elementsTemplate);

    this._likes.forEach((like) => {
      if (this._likes === this._userId) {
        this._elementsTemplate.querySelector(".element__like").classList.add("element__like_active");
      }
    });



    return this._elementsTemplate;
  }
  _setEventListeners() {
    this._elementsTemplate.querySelector(".element__image").addEventListener(`click`, () => {
      this._handleCardClick({
        name: this._name,
        link: this._link
      });
    });
  }
  _setEventListeners() {
    this._elementsTemplate.querySelector(".element__image").addEventListener(`click`, () => {
      this._handleCardClick({
        name: this._name,
        link: this._link
      });
    });
  }
  handleLikeCard() {
    const elementLike = this._elementsTemplate.querySelector(".element__like");
    console.log(`🚀 ~ handleLikeCard ~ elementLike:`, elementLike)
    const likeCounter = this._elementsTemplate.querySelector(".element__like-counter");

    elementLike.addEventListener("click", function () {
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
      .querySelector(".element__trash").addEventListener("click", function (e) {
        this._api.deleteCard(this._id)
          .then(() => {
            this._elementsTemplate.closest(".element").remove();
          })
          .catch((err) => {
            console.error(err);
          });
      });
  }
}

  // function cancelCard(card) {
  //   const element = card.closest(".element");
  //   element.remove();
  // }

  // export function createCards(data, user) {
  //   const elementsTemplate = document.querySelector("#template-elements").content;
  //   const cardElement = elementsTemplate
  //     .querySelector(".element")
  //     .cloneNode(true);
  //   const elementTitle = cardElement.querySelector(".element__title");
  //   const elementImage = cardElement.querySelector(".element__image");
  //   const elementTrash = cardElement.querySelector(".element__trash");
  //   const elementLike = cardElement.querySelector(".element__like");
  //   const likeCounter = cardElement.querySelector(".element__like-counter");
  //   const popupPlace = document.querySelector(".popup_type_picture");
  //   const popupPlaceImage = popupPlace.querySelector(`.popup__image`);
  //   const popupPlaceText = popupPlace.querySelector(".popup__text");
  //   const likes = data.likes.length;

  //   likeCounter.textContent = likes;
  //   elementTitle.textContent = data.name;

  //   elementImage.src = data.link;
  //   elementImage.alt = data.name;

  //   if (user._id === data.owner._id) {
  //     elementTrash.classList.add("element__trash_active");

  //     elementTrash.addEventListener("click", function () {
  //       deleteCard(data._id)
  //         .then(() => {
  //           cancelCard(elementTrash);
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     });
  //   }

  //   data.likes.forEach((like) => {
  //     if (like._id === user._id) {
  //       elementLike.classList.add("element__like_active");
  //     }
  //   });
  //   elementImage.addEventListener(`click`, function (evt) {
  //     openPopup(popupPlace);
  //     popupPlaceImage.src = data.link;
  //     popupPlaceImage.alt = data.name;
  //     popupPlaceText.textContent = data.name;
  //   });

  //   elementLike.addEventListener("click", function () {
  //     if (elementLike.classList.contains("element__like_active")) {
  //       deleteLike(data)
  //         .then((data) => {
  //           likeCounter.textContent = data.likes.length;
  //           elementLike.classList.remove("element__like_active");
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     } else {
  //       addLike(data)
  //         .then((data) => {
  //           likeCounter.textContent = data.likes.length;
  //           elementLike.classList.add("element__like_active");
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //     }
  //   });
  //   elementTrash.addEventListener("click", function (e) {
  //     deleteCard(data)
  //       .then(() => {
  //         cardElement.remove();
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   });
  //   return cardElement;
// }
