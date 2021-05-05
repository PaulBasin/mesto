import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
export { openPopup, closePopup };

const formAddValidation = new FormValidator(validationClasses, addPopup);
formAddValidation.enableValidation();

const formEditValidation = new FormValidator(validationClasses, editPopup);
formEditValidation.enableValidation();

function openPopup (popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEscape);
  popup.addEventListener('click', closePopupOverlay);
};

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEscape);
  popup.removeEventListener('click', closePopupOverlay);

};

function closePopupOverlay (evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(document.querySelector('.popup_opened'))
  }
};

function closePopupEscape (evt) {
  const activePopup = document.querySelector('.popup_opened');

  if (evt.key === 'Escape') closePopup(activePopup);
};


// функция открывающая попап редактирования профиля и присваивающая текстовые значения профайла
// значениям инпутов
function openEditPopup (evt) {
  evt.preventDefault();

  popupInputName.value = inputName.textContent;;
  popupInputJob.value = inputJob.textContent;

  openPopup(editPopup);
}

// функция для кнопки попапа редактирования профиля, присваивающая данные инпутов текстовым значениям профиля и закрывающая попап
function changeProfileInfo (evt) {
  evt.preventDefault();

  inputName.textContent = popupInputName.value;
  inputJob.textContent = popupInputJob.value;

  formAddValidation.setButtonState();
  formAddValidation.deleteErrors();

  closePopup(editPopup);
}

// функция создает карточку
const createCard = (data, cardSelector) => {
  const card = new Card(data, cardSelector);
  const cardElement = card.generateCard();

  return cardElement;
};

function addCard (evt) {
  evt.preventDefault();

  cardsContainer.prepend(createCard({
    name: addCardform.elements.name.value,
    link: addCardform.elements.link.value
  }, '.card-template'));

  addCardform.reset();

  formAddValidation.setButtonState();
  closePopup(addPopup);
};


// добавления карточек в блок со всеми карточками
initialCards.forEach((element) => {
  const newCard = createCard(element, '.card-template');
  cardsContainer.append(newCard);
 });


// обработчики событий
editButton.addEventListener('click', openEditPopup);
editPopupCloseButton.addEventListener('click', () => closePopup(editPopup));
addButton.addEventListener('click',  () => openPopup(addPopup));
addPopupCloseButton.addEventListener('click', () => closePopup(addPopup));
imagePopupCloseButton.addEventListener('click', () => closePopup(imagePopup));
editProfileForm.addEventListener('submit', changeProfileInfo);
addCardform.addEventListener('submit', addCard);

