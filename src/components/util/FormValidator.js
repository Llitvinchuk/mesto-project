export default class FormValidator{
	constructor(options){
		this._options = options;		
	}

	_enableValidation(){
		const formList = Array.from(document.querySelectorAll('.' + this._options.formList));
		formList.forEach((formElement)=>{
	    this._setEventListener(formElement);
	  })
	}

	_setEventListener(formElement){
		const inputList = Array.from(formElement.querySelectorAll('.' + this._options.inputList));
	  const buttonSave = formElement.querySelector('.' + this._options.ButtonSave);
	  this._setSaveButtonStatus(inputList, buttonSave, this._options);
	  inputList.forEach((inputElement) =>{
	    inputElement.addEventListener('input', ()=>{
	      this._checkInputValidity(formElement, inputElement, this._options);
	      this._setSaveButtonStatus(inputList, buttonSave, this._options);
	    })
	  })
	}

	_checkInputValidity(form, input){
		const isValid = input.validity.valid
		if (input.validity.patternMismatch) {
			input.setCustomValidity(input.dataset.errorMassage);
	  }else if(input.validity.typeMismatch){
	  	input.setCustomValidity(input.dataset.errorMassageUrl);
	  }else if(input.validity.tooShort){
	    input.setCustomValidity(input.dataset.errorMassageShort);
	  }else {
	  	input.setCustomValidity("");
	  };
		  if(!input.validity.valid){
	    this._showError(input, form, input.validationMessage, this._options);
	  } else{
	    this._hideError(input, form, this._options);
	  }
	}

	_showError(input, form, errorMessage){
		const errorSpan = form.querySelector(`.${input.id}-` + this._options.inputError);  
	  input.classList.add(this._options.errorClass)   
	  errorSpan.classList.add(this._options.errorClass)
	  errorSpan.textContent = errorMessage;
	}

	_hideError(input, form){
		const errorSpan = form.querySelector(`.${input.id}-` + this._options.inputError);
	  input.classList.remove(this._options.errorClass)  
	  errorSpan.textContent = '';
	  errorSpan.classList.remove(this._options.errorClass);
	}

	_setSaveButtonStatus(inputList, button){
		if(this._hasInvalidInput(inputList)){
	    button.setAttribute('disabled', true);
	    button.classList.add(this._options.inactiveButton); 
	  }else {
	    button.removeAttribute('disabled');
	    button.classList.remove(this._options.inactiveButton);    
	  }
	}

	_disableButton(popup){
		const buttonSave = popup.querySelector('.' + this._options.ButtonSave);
	  buttonSave.setAttribute('disabled', true);
	  buttonSave.classList.add(this._options.inactiveButton);
	}

	_hasInvalidInput(inputList){
		return inputList.some((inputElement)=>{
   		return !inputElement.validity.valid;    
  	})
	}
}