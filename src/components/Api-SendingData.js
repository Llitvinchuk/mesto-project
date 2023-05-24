/*
отправка различных данных на сервер
каждый метод отвечает за свою форму т.к. они отличаются
*/

import Api from './Api.js';
export default class ApiSending extends Api{
	constructor(authorization, fetchUrl, method){
		super(authorization, fetchUrl, method);
	}
	_sendingAvatar(element){
		this._element = element;
		return fetch(this._url, {
			method: this._method,
	    headers: {
	      authorization: this._owner,
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
      	avatar: this._element.target.avatarImage.value 
  		})
  	})
  	.then(res =>{
	    if(res.ok){
	      return res.json();
	    }
	    return Promise.reject(`Ошибка: ${res.status}`);
	  })
	}
	_sendingProfile(element){
		this._element = element;
		return fetch(this._url, {
			method: this._method,
	    headers: {
	      authorization: this._owner,
	      'Content-Type': 'application/json'
	    },
	    body: JSON.stringify({
      	name: this._element.target.name.value,
      	about: this._element.target.description.value
  		})
  	})
  	.then(res =>{
	    if(res.ok){
	      return res.json();
	    }
	    return Promise.reject(`Ошибка: ${res.status}`);
	  })
	}
}