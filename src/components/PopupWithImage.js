import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._fullImage = this._popup.querySelector(".image-popup__image");
    this._fullImageTitle = this._popup.querySelector(".image-popup__title");
  }

  open(name, link) {
    console.log(name);
    super.open();
    this._fullImage.src = link;
    this._fullImageTitle.alt = name;
    this._fullImageTitle.textContent = name;
  }
}

