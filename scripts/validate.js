const validationClasses = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

const showInputError = (formElement, inputElement, errorMessage, classes) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(classes.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(classes.errorClass);
};

const hideInputError = (formElement, inputElement, classes) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(classes.inputErrorClass);
  errorElement.classList.remove(classes.errorClass);
  errorElement.textContent = '';
};


const checkInputValidity = (formElement, inputElement, classes) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, classes);
  } else {
    hideInputError(formElement, inputElement, classes);
  }
};

function setButtonState(buttonElement, isActive, classes) {
	if (isActive) {
    buttonElement.classList.remove(classes.inactiveButtonClass);
		buttonElement.disabled = false;
	} else {
    buttonElement.classList.add(classes.inactiveButtonClass);
		buttonElement.disabled = true;

	}
}

const setEventListeners = (formElement, classes) => {
  const inputList = formElement.querySelectorAll(classes.inputSelector);
  const buttonElement = formElement.querySelector(classes.submitButtonSelector);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, classes);
      setButtonState(buttonElement, formElement.checkValidity(), classes);
    });
  });
};


const enableValidation = (classes) => {
  const formList = Array.from(document.querySelectorAll(classes.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });

    setEventListeners(formElement, classes);
  });
};



