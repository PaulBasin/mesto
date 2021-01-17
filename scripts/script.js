const popup = document.querySelector('.popup');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup__add-card');
const addPopupCloseButton = document.querySelector('#popup-add-close');
const addCardform = document.forms.add;
const cardsContainer = document.querySelector('.cards-container');

const editButton = document.querySelector('.user-info__edit-button');
const editPopup = document.querySelector('.popup__edit-profile');
const editProfileForm = document.forms.edit;
const editPopupCloseButton = document.querySelector('#popup-edit-close');
const popupInputName = document.querySelector('.popup__input_type_name');
const popupInputJob = document.querySelector('.popup__input_type_job');
const inputName = document.querySelector('.user-info__name');
const inputJob = document.querySelector('.user-info__job');

const imagePopup = document.querySelector('#popup-image');
const imagePopupCloseButton = document.querySelector('#popup-image-close');
const imagePopupPicture = document.querySelector('.image-popup__image');
const imagePopupTitle = document.querySelector('.image-popup__title');


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

function closePopupOverlay (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'))
  }
}

function closePopupEscape (evt) {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') closePopup(activePopup);
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
  popup.addEventListener('click', closePopupOverlay);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
  popup.removeEventListener('click', closePopupOverlay);

}

// функции редактирования профиля

// функция открывающая попап редактирования профиля и присваивающая текстовые значения профайла
// значениям инпутов
function openEditPopup () {
  popupInputName.value = inputName.textContent;;
  popupInputJob.value = inputJob.textContent;

  openPopup(editPopup);
}

// функция для кнопки попапа редактирования профиля, присваивающая данные инпутов текстовым значениям
// профиля и закрывающая попап
function changeValues(e) {
  e.preventDefault();

  inputName.textContent = popupInputName.value;
  inputJob.textContent = popupInputJob.value;

  closePopup(editPopup);
}

// функция клонирует template карточки, лайкает карточки и удаляет их
function createCard (value) {
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  card.querySelector('.card__name').textContent = value.name;

  card.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_liked');
  });

  card.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

  const cardImage = card.querySelector('.card__image');

  cardImage.src = `${value.link}`;
  cardImage.alt = value.name;
  cardImage.addEventListener('click', () => {
    openImagePopup(value);
  })

  return card;
}

function addCard(evt) {
  evt.preventDefault();
  const submitButton = document.querySelector('#popup-button-add-card');

  cardsContainer.prepend(createCard({
    name: addCardform.elements.name.value,
    link: addCardform.elements.link.value
  }));

  addCardform.reset();

  closePopup(addPopup);

  // setButtonState(submitButton, false, classes.inactiveButtonClass);
  setButtonState(submitButton, false, validationClasses);
}

// функция добавления карточек в блок со всеми карточками
function renderCards(card) {
  cardsContainer.append(...card.map(createCard));
}

// Функция для попапа картинки
function openImagePopup(value) {
  openPopup(imagePopup);
  imagePopupPicture.src = value.link;
  imagePopupPicture.alt = value.name;
  imagePopupTitle.textContent = value.name;
}

// обработчики событий
editButton.addEventListener('click', openEditPopup);
editPopupCloseButton.addEventListener('click', () => closePopup(editPopup));
addButton.addEventListener('click',  () => openPopup(addPopup));
addPopupCloseButton.addEventListener('click', () => closePopup(addPopup));
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));
editProfileForm.addEventListener('submit', changeValues);
renderCards(initialCards);
addCardform.addEventListener('submit', addCard);
enableValidation(validationClasses);
