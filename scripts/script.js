const editButton = document.querySelector('.user-info__edit-button');
const popup = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close');
const popupForm = document.forms.edit;


function openPopup (e) {
  const inputName = document.querySelector('.user-info__name').textContent;
  const inputJob = document.querySelector('.user-info__job').textContent;

  const name = popupForm["name"];
  const job = popupForm["job"];

  name.value = inputName;
  job.value = inputJob;

  popup.classList.add('popup_opened');
}

function closePopup(e) {
  popup.classList.remove('popup_opened');
}

function changeValues(e) {
  e.preventDefault();

  const inputName = document.querySelector('.user-info__name');
  const inputJob = document.querySelector('.user-info__job');

  const name = popupForm["name"];
  const job = popupForm["job"];

  inputName.textContent = name.value;
  inputJob.textContent = job.value;

  closePopup();
}


editButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', changeValues);
