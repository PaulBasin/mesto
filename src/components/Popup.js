export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupButtonClose = this._popup.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
    // this._handleEscClose = this._handleEscClose.bind(this);
  }

  _handleEscClose(evt) {
    if (evt.code === "Escape") this.close();
  }

  _handleOverlayClose(evt) {
    if (evt.target === this._popup) this.close();
  }

  open() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }


  setEventListeners() {
    this._popupButtonClose.addEventListener("click", this.close.bind(this));
    this._popup.addEventListener("click", this._handleOverlayClose.bind(this));
  }
}

