const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-23",
  headers: {
    authorization: "828dfec4-4859-48aa-a7be-cfe17041058c",
    "Content-Type": "application/json",
  },
};

const checkReply = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
};

export const getUserData = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers,
  }).then(checkReply);
};
export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then(checkReply);
};
export const editProfile = (name, about) => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then(checkReply);
};

export const addNewCard = (link, name) => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then(checkReply);
};

export const deleteCard = (card) => {
  return fetch(`${config.baseUrl}/cards/${card._id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkReply);
};
export const addLike = (card) => {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: "PUT",
    headers: config.headers,
  }).then(checkReply);
};

export const deleteLike = (card) => {
  return fetch(`${config.baseUrl}/cards/likes/${card._id}`, {
    method: "DELETE",
    headers: config.headers,
  }).then(checkReply);
};

export const editAvatar = (photo) => {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: photo,
    }),
  }).then(checkReply);
};
