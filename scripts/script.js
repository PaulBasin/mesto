let addButton = document.querySelector('.profile__add-button');
let addPopup = document.querySelector('#popup-add-card');
let addPopupCloseButton = document.querySelector('#popup-add-close');
let addCardform = document.forms.add;
let cardsContainer = document.querySelector('.cards-container');

let editButton = document.querySelector('.user-info__edit-button');
let editPopup = document.querySelector('#popup-edit-profile');
let editProfileForm = document.forms.edit;
let editPopupCloseButton = document.querySelector('#popup-edit-close');
let popupInputName = document.querySelector('.popup__input_type_name');
let popupInputJob = document.querySelector('.popup__input_type_job');
let inputName = document.querySelector('.user-info__name');
let inputJob = document.querySelector('.user-info__job');

let imagePopup = document.querySelector('.image-popup');
let imagePopupCloseButton = document.querySelector('.image-popup__close');
let imagePopupPicture = document.querySelector('.image-popup__image');
let imagePopupTitle = document.querySelector('.image-popup__title');

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

// функции редактирования профиля

// функция открывающая попап редактирования профиля и присваивающая текстовые значения профайла
// значениям инпутов

function openEditPopup (e) {
  popupInputName.value = inputName.textContent;;
  popupInputJob.value = inputJob.textContent;

  editPopup.classList.add('popup_opened');
}

// функция закрытия попапа редактирования профиля
function closeEditPopup(e) {
  editPopup.classList.remove('popup_opened');
}

// функция для кнопки попапа редактирования профиля, присваивающая данные инпутов текстовым значениям
// профиля и закрывающая попап
function changeValues(e) {
  e.preventDefault();

  inputName.textContent = popupInputName.value;
  inputJob.textContent = popupInputJob.value;

  closeEditPopup();
}

// фукции добавляющие и рендаряющие новые карточки

// функция открытия попопа добавления карточки
function openAddPopup (e) {
  addPopup.classList.add('popup_opened');
}

// функция закрытия попопа добавления карточки
function closeAddPopup(e) {
  addPopup.classList.remove('popup_opened');
}

// функция клонирует template карточки, лайкает карточки и удаляет их
function createCard (value) {
  const cardTemplate = document.querySelector('#card').content;
  const card = cardTemplate.querySelector('.card').cloneNode(true);

  card.querySelector('.card__image').style.backgroundImage = `url(${value.link})`;
  card.querySelector('.card__name').textContent = value.name;

  card.querySelector('.card__like-button').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_liked');
  });

  card.querySelector('.card__delete-button').addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

  return card;
}

function addCard(evt) {
  evt.preventDefault();

  cardsContainer.prepend(createCard({
    name: addCardform.elements.name.value,
    link: addCardform.elements.link.value
  }));

  addCardform.elements.name.value = '';
  addCardform.elements.link.value = '';

  closeAddPopup();
}

// функция добавления карточек в блок со всеми карточками
function renderCards(card) {
  cardsContainer.append(...card.map(createCard));
}

// Функции для попапа картинки

function openImagePopup(e) {
  if (e.target.classList.contains('card__image')) {
    imagePopup.classList.add('image-popup_opened');
    imagePopupPicture.src = e.target.style.backgroundImage.split('"')[1];
    imagePopupTitle.textContent = e.target.closest('.card').querySelector('.card__name').textContent;
  } else return;
}

function closeImagePopup() {
  imagePopup.classList.remove('image-popup_opened');
}

// обработчики событий
editButton.addEventListener('click', openEditPopup);
editPopupCloseButton.addEventListener('click', closeEditPopup);
editProfileForm.addEventListener('submit', changeValues);

addButton.addEventListener('click', openAddPopup);
addPopupCloseButton.addEventListener('click', closeAddPopup);
renderCards(initialCards);
addCardform.addEventListener('submit', addCard);

cardsContainer.addEventListener('click', openImagePopup);
imagePopupCloseButton.addEventListener('click', closeImagePopup);
