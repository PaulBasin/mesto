export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
    this.close = this.close.bind(this);
    this._closeButton = this._popup.querySelector('.popup__close');

  }
  open() {
    this._popup.classList.add('popup_opened');
    this.setEventListeners();
  }
  close() {
    this._popup.classList.remove('popup_opened');
    this._removeEventListeners();
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  _handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.addEventListener('click', this._handleOverlayClose);
    this._closeButton.addEventListener('click', this.close);
  }

  _removeEventListeners() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.removeEventListener('click', this._handleOverlayClose);
    this._closeButton.removeEventListener('click', this.close);
  }
}
