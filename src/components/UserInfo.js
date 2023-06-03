export default class UserInfo {
  constructor({ selectorName, selectorInfo, selectorAvatar }) {
    this._name = document.querySelector(selectorName);
    this._info = document.querySelector(selectorInfo);
    this._avatar = document.querySelector(selectorAvatar);
  }

  getUserInfo() {
    this._userInfo = {
      name: this._name.textContent,
      info: this._info.textContent,
      avatar: this._avatar.src,
    };

    return this._userInfo;
  }

  setUserInfo(data) {
    this.data = data;

    this._name.textContent = data.name;
    this._info.textContent = data.about;
    this.setUserAvatar(data);
  }

  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}
