export default class Card {
  constructor(myId, data, templateSelector, {
    handleCardClick,
    handleDeleteCard,
    handleAddLike,
    handlRemoveLike
  }) {
    this._handleDeleteCard = handleDeleteCard;
    this._handleCardClick = handleCardClick;
    this._handlRemoveLike = handlRemoveLike;
    this._handleAddLike = handleAddLike;
    this._data = data;
    this._cardId = data._id;
    this._likes = data.likes;
    this._myId = myId;
    this._ownerId = data.owner._id;
    this._text = data.name;
    this._altText = data.name;
    this._link = data.link;
    this._template = document.querySelector(templateSelector).content.querySelector(".card");
    this.elementCard = document.querySelector(".cards__image");
  }
  _getTemplate() {
    const cardElement = this._template.cloneNode(true);
    return cardElement;
  }

  _setEventListeners() {
    const likelist = this._element.querySelector(".card__like-button");

    likelist.addEventListener("click", () => {
      if (!likelist.classList.contains("card__like-button_liked")) {
        this._handleAddLike();
        this._handleLikeClick();
      } else {
        this._handlRemoveLike();
        this._handleLikeClick();
      }
    });

    this._element.querySelector(".card__delete-button")
      .addEventListener("click", () => this._handleDeleteCard());
    this.elementCardImage.addEventListener('click', () => this._handleCardClick(this._text, this._link));

  }

  _handleRemoveClick() {
    this._element.remove();
    // document.querySelector('.popup_type_delete-card').classList.add('popup_opened');
  }

  _handleLikeClick() {
    this._element.querySelector(".card__like-button")
      .classList.toggle("card__like-button_liked");
  }
  deleteCard() {
    this._element.remove();
  }

  getId() {
    return this._cardId;
  }

  likeCount(res) {
    this._element.querySelector(".cards__like-counter").innerText = res.length;

  }

  checkLikeState() {
    this._likes.forEach((likeId) => {
      if (likeId._id === this._myId) {
        this._element.querySelector(".card__like-button")
          .classList.add("card__like-button_liked");
      }
    });
  }

  generateCard() {
    this._element = this._getTemplate();
    this.elementCardImage = this._element.querySelector(".card__image");
    this._setEventListeners();
    this.elementCardImage.src = this._link;
    this.elementCardImage.alt = this._altText;
    this._element.querySelector(".card__name").innerText = this._text;
    this.likeCount(this._likes);
    this.checkLikeState();
    if (this._ownerId !== this._myId) {
      this._element.querySelector('.card__delete-button').remove();
    }
    return this._element;
  }
}
