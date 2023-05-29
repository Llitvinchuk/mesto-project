export default class UserInfo{
	constructor(selectorName, selectorInfo){
		this._name = document.querySelector(selectorName);
		this._info = document.querySelector(selectorInfo);
	}
	getUserInfo(profilInfoArr){
		this._profilInfo = profilInfoArr;
		userInfo={
			name: this._profilInfo.name;
			about: this._profilInfo.about;
		}
		return userInfo
	}

	setUserInfo(userInfo){
		const profileName = document.querySelector(".profile__title");//старые данные
		const profileAbout = document.querySelector(".profile__subtitle");//старые данные

		profileName.textContent = userInfo.name; //добавляем на страницу
		profileAbout.textContent = userInfo.about; //добавляем на страницу

		return userInfo;//данные для отправки в Api
	}
}
