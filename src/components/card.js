import { openPopup } from "./modal";
import { deleteCard, addLike, deleteLike } from "./api.js";
export const cardsContainer = document.querySelector(".element-container");

class Card {
  constructor(data) {
    this.data = data;
  }
  _getElement() {
    const elementsTemplate = document
      .querySelector("#template-elements")
      .content.querySelector(".element")
      .cloneNode(true);
    return elementsTemplate;
  }
  generate() {
    this._element = super._getElement();
    const elementTitle = cardElement.querySelector(".element__title");
    const elementImage = this._element.querySelector(".element__image");
    const elementTrash = this._element.querySelector(".element__trash");
    const elementLike = this._element.querySelector(".element__like");
    const likeCounter = cardElement.querySelector(".element__like-counter");
    const popupPlace = document.querySelector(".popup_type_picture");
    const popupPlaceImage = this._element.querySelector(`.popup__image`);
    const popupPlaceText = this._element.querySelector(".popup__text");
    const likes = data.likes.length;
    this._element.id = this._data._id;

    if (this._user._id === this._data.owner._id) {
      elementTrash.classList.add("element__trash_active");

      elementTrash.addEventListener("click", function (evt) {
        deleteCard(this._data._id)
          .then(() => {
            evt.target.closest(".element").remove();
          })
          .catch((err) => {
            console.error(err);
          });
      });
    }

    this._data.likes.forEach((like) => {
      if (like._id === user._id) {
        elementLike.classList.add("element__like_active");
      }
    });
    elementImage.addEventListener(`click`, function (evt) {
      openPopup(popupPlace);
      popupPlaceImage.src = this._data.link;
      popupPlaceImage.alt = this._data.name;
      popupPlaceText.textContent = this._data.name;
    });

    this._element.addEventListener("click", function () {
      if (elementLike.classList.contains("element__like_active")) {
        deleteLike(data)
          .then((data) => {
            likeCounter.textContent = data.likes.length;
            elementLike.classList.remove("element__like_active");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        addLike(data)
          .then((data) => {
            likeCounter.textContent = data.likes.length;
            elementLike.classList.add("element__like_active");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
    elementTrash.addEventListener("click", function (e) {
      deleteCard(data)
        .then(() => {
          cardElement.remove();
        })
        .catch((err) => {
          console.error(err);
        });
    });
    return cardElement;
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
