export default class FormValidator {
  constructor(classes, formElement) {
    this._formSelector = classes.formSelector;
    this._inputSelector = classes.inputSelector;
    this._submitButtonSelector = classes.submitButtonSelector;
    this._inactiveButtonClass = classes.inactiveButtonClass;
    this._inputErrorClass = classes.inputErrorClass;
    this._errorClass = classes.errorClass;
    this._form = formElement;

    this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    this._submitButton = this._form.querySelector(this._submitButtonSelector);
  }

  _showError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.textContent = input.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideError(input) {
    const errorElement = this._form.querySelector(`#${input.id}-error`);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(input) {
    if (input.checkValidity()) {
      this._hideError(input);
    } else {
      this._showError(input);

    }
  }

  _toggleButtonState(buttonElement) {
    if (this._form.checkValidity()) {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    } else {
      this._addInactiveButtonClass(buttonElement);
      buttonElement.disabled = true;

    }
  }

  _addInactiveButtonClass(name) {
    name.classList.add(this._inactiveButtonClass);
  }

  _setEventListeners() {
    this._inputList.forEach((input) => {
      input.addEventListener('input', (evt) => {
        this._checkInputValidity(evt.target);
        this._toggleButtonState(this._submitButton);
      });
    });
    this._toggleButtonState(this._submitButton);
  }


  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }

  resetValidation() {
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement)
    });
  }

}
