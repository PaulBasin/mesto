import { openPopup } from './index.js';

export class Card {
  constructor(data, cardSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardSelector = cardSelector;
  };

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.card')
    .cloneNode(true);

    return cardElement;
  };

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__image').src = this._link;
    this._element.querySelector('.card__name').textContent = this._name;
    this._element.querySelector('.card__image').alt = this._alt;

    return this._element;
  };


  _likeCard() {
    this._element.querySelector('.card__like-button').classList.toggle('card__like-button_liked');
  }

  _deleteCard() {
    this._element.querySelector('.card__delete-button').closest('.card').remove();
  }

  _handleImage() {
    imagePopupPicture.src = this._link;
    imagePopupPicture.alt = this._alt;
    imagePopupTitle.textContent = this._name;

    openPopup(imagePopup);
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', () => {
      this._likeCard();
    });
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handleImage();
    });
  };
};
