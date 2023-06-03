const config = {
  baseUrl: "https://nomoreparties.co/v1/plus-cohort-23",
  headers: {
    authorization: "828dfec4-4859-48aa-a7be-cfe17041058c",
    "Content-Type": "application/json",
  },
};
export default class Api {
  constructor(options = config) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getUserData() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  editProfile(userData) {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify(userData),
    }).then(this._checkResponse);
  }

  addNewCard(data) {
    return fetch(`${this._options.baseUrl}/cards/`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link,
      }),
    }).then(this._checkResponse);
  }

  addLike(id) {
    return fetch(`${this._options.baseUrl}/cards/likes/${id}`, {
      method: "PUT",
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  deleteLike(id) {
    return fetch(`${this._options.baseUrl}/cards/likes/${id}`, {
      method: "DELETE",
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  editAvatar(avatarUrl) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify({ avatar: avatarUrl }),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    return fetch(`${this._options.baseUrl}/cards/${id}`, {
      method: "delete",
      headers: this._options.headers,
    }).then(this._getResponseData);
  }
}
