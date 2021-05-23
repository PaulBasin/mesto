

export class Card {

  static consts = {
    removeButton: ".card__delete-button",
    likeButton: ".card__like-button",
    likeButtonActive: "card__like-button_liked",
    cardImage: ".card__image",
    card: ".card",
    text: ".card__name",
  };

  constructor(data, cardSelector, handleCardClick) {
    this._name = data.name;
    this._alt = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._card = this._getTemplate(this._cardSelector);
    this._deleteButton = this._card.querySelector(Card.consts.removeButton);
    this._likeButton = this._card.querySelector(Card.consts.likeButton);
    this._cardImage = this._card.querySelector(Card.consts.cardImage);
    this._cardText = this._card.querySelector(Card.consts.text);
  }

  _getTemplate(template) {
    const cardElement = document.querySelector(template).content.cloneNode(true);

    this._cardTemplate = cardElement;

    return this._cardTemplate;
  }

  generateCard() {
    this._cardImage.alt = this._alt;
    this._cardImage.src = this._link;
    this._cardText.textContent = this._name;
    this._setEventListeners();

    return this._card;
  }

  _likeCard(evt) {
    evt.target.classList.toggle(Card.consts.likeButtonActive);
  }

  _deleteCard(evt) {
    evt.target.closest(Card.consts.card).remove();
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", this._deleteCard);
    this._likeButton.addEventListener("click", this._likeCard);
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }


}
