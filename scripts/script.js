const popup = document.querySelector('.popup');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('#popup-add-card');
const addPopupCloseButton = document.querySelector('#popup-add-close');
const addCardform = document.forms.add;
const cardsContainer = document.querySelector('.cards-container');

const editButton = document.querySelector('.user-info__edit-button');
const editPopup = document.querySelector('#popup-edit-profile');
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

function openPopup (popup) {
  popup.classList.add('popup_opened');
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

// функции редактирования профиля

// функция открывающая попап редактирования профиля и присваивающая текстовые значения профайла
// значениям инпутов


function openEditPopup (e) {
  popupInputName.value = inputName.textContent;;
  popupInputJob.value = inputJob.textContent;

  openPopup(editPopup);
}

// функция закрытия попапа редактирования профиля
function closeEditPopup(e) {
  closePopup(editPopup);
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
  openPopup(addPopup)
}

// функция закрытия попопа добавления карточки
function closeAddPopup(e) {
  closePopup(addPopup)
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
  cardImage.style.backgroundImage = `url(${value.link})`;
  cardImage.addEventListener('click', () => {
    openImagePopup(value);
  })

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

function openImagePopup(value) {
  openPopup(imagePopup);
  imagePopupPicture.src = value.link;
  imagePopupTitle.textContent = value.name;
}

function closeImagePopup() {
  closePopup(imagePopup);
}

// обработчики событий
editButton.addEventListener('click', openEditPopup);
editPopupCloseButton.addEventListener('click', closeEditPopup);
editProfileForm.addEventListener('submit', changeValues);
addButton.addEventListener('click', openAddPopup);
addPopupCloseButton.addEventListener('click', closeAddPopup);
renderCards(initialCards);
addCardform.addEventListener('submit', addCard);
imagePopupCloseButton.addEventListener('click', closeImagePopup);
