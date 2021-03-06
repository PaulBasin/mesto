import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(popupSelector, {
    handleFormSubmit
  }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this.button = this._popup.querySelector('.popup__button');
    this._form = this._popup.querySelector('.popup__form');
    this._fields = Array.from(this._form.querySelectorAll('.popup__input'));
  }
  _getInputValues() {
    const values = this._fields.map((field) => {
      return field.value;
    });
    return values;
  }
  setInputValues(values) {
    this._fields.forEach((field, index) => {
      field.value = values[index];
    })
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleFormSubmit);
  }
  close() {
    super.close();
    this._form.reset();
    this._form.removeEventListener('submit', this._handleFormSubmit);
  }

  setLoading(loading) {
    if (loading) {
      this.button.textContent = 'Сохранение...';
    } else {
      this.button.textContent = 'Сохранить'
    }
  }



}
