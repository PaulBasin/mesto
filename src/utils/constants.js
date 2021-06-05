export const elementTemplate = '.card-template';

// кнопки открытия попапов
export const avatar = document.querySelector(".user-info__photo"); // заменить src на background-image!!
export const buttonOpenEditPopup = document.querySelector(".user-info__edit-button");
export const buttonOpenNewCardPopup = document.querySelector(".profile__add-button");

// кнопки закрытия попапов
export const buttonCloseEditPopup = document.querySelector("#popup-edit-close");
export const buttonCloseImagePopup = document.querySelector("#popup-image-close");
export const buttonCloseNewCardPopup = document.querySelector("№popup-add-close");

// селекторы попапов
export const popupAvatar = "#popup-change-avatar"
export const popupEdit = "#popup-edit-profile";
export const popupNewCard = "#popup-add-card";
export const popupImage = "#popup-image";
export const popupDelete = "#popup-delete-card";
export const popupInputName = document.querySelector('.popup-edit-profile .popup__input_type_name');
export const popupInputJob = document.querySelector('.popup__input_type_job');

export const popupImageTitle = document.querySelector(".image-popup__title");
export const popupImagePicture = document.querySelector(".image-popup__image");
export const cardName = document.querySelector(".popup-add-card .popup__input_type_name");
export const cardUrl = document.querySelector(".popup-add-card .popup__input_type_link");
export const changeInputName = document.querySelector(".user-info__name");
export const changeInputJob = document.querySelector(".user-info__job");
export const cards = document.querySelector('.cards-container');


export const formEditElement = document.querySelector('.popup__form-edit')
export const formNewCardElement = document.querySelector('.popup__form-add')
export const formAvatarElement = document.querySelector('.popup__form-change')

// конфиг для валидации
export const validationClasses = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

