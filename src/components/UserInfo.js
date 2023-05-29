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
    };
    return this._userInfo;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._info.textContent = data.about;
    this.setUserAvatar(data);
    // const profileName = document.querySelector(".profile__title"); //старые данные
    // const profileAbout = document.querySelector(".profile__subtitle"); //старые данные

    // profileName.textContent = userInfo.name; //добавляем на страницу
    // profileAbout.textContent = userInfo.about; //добавляем на страницу

    // return userInfo; //данные для отправки в Api
  }
  setUserAvatar(data) {
    this._avatar.src = data.avatar;
  }
}
