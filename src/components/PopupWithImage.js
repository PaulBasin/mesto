import Popup from './Popup.js';


export class PopupWithImage extends Popup {
  constructor(popupSelector, popupImageTitle, popupImagePicture) {
    super(popupSelector);
    this._popupImageTitle = popupImageTitle;
    this._popupImagePicture = popupImagePicture;

  }
  open(text, link) {
    super.open();
    this._popupImageTitle.innerText = text;
    this._popupImagePicture.src = link;
    this._popupImagePicture.alt = text;
  }
}
