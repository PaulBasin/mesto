let editButton = document.querySelector('.user-info__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__close');
let popupForm = document.forms.edit;
let popupInputName = document.querySelector('.popup__input_type_name');
let popupInputJob = document.querySelector('.popup__input_type_job');
let inputName = document.querySelector('.user-info__name');
let inputJob = document.querySelector('.user-info__job');

// функция открывающая попап и присваивающая текстовые значения профайла
// значениям инпутов

function openPopup (e) {

  popupInputName.value = inputName.textContent;;
  popupInputJob.value = inputJob.textContent;

  popup.classList.add('popup_opened');
}

// функция закрытия попапа

function closePopup(e) {
  popup.classList.remove('popup_opened');
}

// функция для кнопки попапа присваивающая данные инпутов текстовым значениям
// профайла и закрывающая попап

function changeValues(e) {
  e.preventDefault();

  inputName.textContent = popupInputName.value;
  inputJob.textContent = popupInputJob.value;

  closePopup();
}

// обработчики событий

editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', changeValues);
