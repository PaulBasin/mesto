// массив я данными карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// конфиг для валидации
const validationClasses = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// переменные попапа добавления карточки
const popup = document.querySelector('.popup');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('#popup-add-card');
const addPopupCloseButton = document.querySelector('#popup-add-close');
// const addCardform = document.forms.add;
const addCardform = document.querySelector('.popup__form-add');
const cardsContainer = document.querySelector('.cards-container');

// переменные попапа редактирования профиля
const editButton = document.querySelector('.user-info__edit-button');
const editPopup = document.querySelector('#popup-edit-profile');
// const editProfileForm = document.forms.edit;
const editProfileForm = document.querySelector('.popup__form-edit');
const editPopupCloseButton = document.querySelector('#popup-edit-close');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputJob = document.querySelector('.popup__input_type_job');
const inputName = document.querySelector('.user-info__name');
const inputJob = document.querySelector('.user-info__job');

// переменные для попапа карточек
const imagePopup = document.querySelector('#popup-image');
const imagePopupCloseButton = document.querySelector('#popup-image-close');
const imagePopupPicture = document.querySelector('.image-popup__image');
const imagePopupTitle = document.querySelector('.image-popup__title');

const root = document.querySelector('.root');
