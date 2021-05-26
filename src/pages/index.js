import {
  initialCards,
  validationClasses,
  editButton,
  editPopup,
  addButton,
  addPopup,
  inputName,
  inputJob,
  popupInputName,
  popupInputJob,
} from "../utils/Constants.js";

import { Card } from "../components/Card.js";

import { FormValidator } from "../components/FormValidator.js";

import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";

import { UserInfo } from "../components/UserInfo.js";

import { Section } from "../components/Section.js";

import "./index.css";


export const createCard = (dataElement) => {
  const card = new Card(dataElement, ".card-template", (name, link) => {
    popupOpenImage.open(name, link);
  });

  const cardElement = card.generateCard();
  return cardElement;
}

const cardList = new Section(
  {
    data: initialCards,
    renderItems: (card) => { return createCard(card); }
  },
  ".cards-container"
);

cardList.renderItems();

const formAddValidation = new FormValidator(validationClasses, addPopup);
formAddValidation.enableValidation();

const formEditValidation = new FormValidator(validationClasses, editPopup);
formEditValidation.enableValidation();

export const popupOpenImage = new PopupWithImage(".image-popup");
popupOpenImage.setEventListeners();

const userInfoValues = new UserInfo(inputName, inputJob);

const popupOpenProfile = new PopupWithForm("#popup-edit-profile", (formValues) => {
  userInfoValues.setUserInfo(formValues);
  popupOpenProfile.close();
});
popupOpenProfile.setEventListeners();

const popupOpenAddCard = new PopupWithForm("#popup-add-card", (formValues) => {
  cardList.addItem(createCard(formValues));
  popupOpenAddCard.close();
});
popupOpenAddCard.setEventListeners();

//  обработчик для открытия попапа редактирования профиля
editButton.addEventListener("click", () => {
  const userProfile = userInfoValues.getUserInfo();
  popupInputName.value = userProfile.name.textContent;
  popupInputJob.value = userProfile.job.textContent;
  popupOpenProfile.open();
});

//  Открытие попапа добавления карточки
addButton.addEventListener("click", () => {
  popupOpenAddCard.open();
});

