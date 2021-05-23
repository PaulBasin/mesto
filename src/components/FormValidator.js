
export class FormValidator {
  constructor(classes, formElement) {
    this._classes = classes;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._classes.inputSelector));
    this._buttonSelector = this._formElement.querySelector(this._classes.submitButtonSelector);
  }

  // проверяем каждый ли инпут в форме валиден
  _inputValidity() {
    return this._inputList.some(inputElement => !inputElement.validity.valid);
  };

  // следим за состоянием кнопки формы
  setButtonState() {
    if (this._inputValidity()) {
      this._buttonSelector.classList.add(this._classes.inactiveButtonClass);
      this._buttonSelector.setAttribute('disabled', true);
    } else {
      this._buttonSelector.classList.remove(this._classes.inactiveButtonClass);
      this._buttonSelector.removeAttribute('disabled');
    };
  };

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._classes.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._classes.errorClass);
  };

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._classes.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._classes.errorClass);
  };

  // проверяем поля на валидность
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };

  // слушатели событий
  _setEventListeners() {
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', (evt) => {
        this._checkInputValidity(inputElement);
        this.setButtonState();
      });

      this.setButtonState();
    });
  };

  deleteErrors() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    });
  };

  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };


}


