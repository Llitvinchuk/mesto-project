const showInputError = (formElement, popupContent, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${popupContent.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.titleError);
};

const hideInputError = (formElement, popupContent, settings) => {
  const errorElement = formElement.querySelector(`.${popupContent.id}-error`);
  errorElement.classList.remove(settings.titleError);

  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.contentSelector)
  );

  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  formElement.addEventListener("reset", () => {
    setTimeout(() => {
      toggleButtonState(inputList, buttonElement, settings);
    }, 0);
  });
  inputList.forEach((popupContent) => {
    popupContent.addEventListener("input", function () {
      checkInputValidity(formElement, popupContent, settings);

      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((popupContent) => {
    return !popupContent.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.disabledButton);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.disabledButton);
  }
};

export const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
};
