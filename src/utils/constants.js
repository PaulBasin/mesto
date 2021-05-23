export const initialCards = [
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
export const validationClasses = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// переменные попапа добавления карточки
export const popup = document.querySelector('.popup');
export const addButton = document.querySelector('.profile__add-button');
export const addPopup = document.querySelector('#popup-add-card');
export const addPopupCloseButton = document.querySelector('#popup-add-close');
export const addCardform = document.querySelector('.popup__form-add');
export const cardsContainer = document.querySelector('.cards-container');

// переменные попапа редактирования профиля
export const editButton = document.querySelector('.user-info__edit-button');
export const editPopup = document.querySelector('#popup-edit-profile');
export const editProfileForm = document.querySelector('.popup__form-edit');
export const editPopupCloseButton = document.querySelector('#popup-edit-close');
export const popupInputName = document.querySelector('.popup__input_type_name');
export const popupInputJob = document.querySelector('.popup__input_type_job');
export const inputName = document.querySelector('.user-info__name');
export const inputJob = document.querySelector('.user-info__job');

// переменные для попапа карточек
export const imagePopup = document.querySelector('#popup-image');
export const imagePopupCloseButton = document.querySelector('#popup-image-close');
export const imagePopupPicture = document.querySelector('.image-popup__image');
export const imagePopupTitle = document.querySelector('.image-popup__title');

export const root = document.querySelector('.root');
