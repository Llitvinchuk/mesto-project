//****************Загрузка с сервера***********************************
/*
Это обший класс. в него передаем id профиля ссылку где его использовать и метод
В ответе получаем данные с сервера
*/
export default class Api{
	constructor(authorization, fetchUrl, method){
		this._owner = authorization;
		this._url = fetchUrl;
		this._method = method;		
	}
	_serverSending(){
		return fetch(this._url, {
			method: this._method,
	    headers: {
	      authorization: this._owner
	    }
  	})
  	.then(res =>{
    if(res.ok){
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  	})
	}
}