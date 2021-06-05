import './index.css';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {
  avatar,
  popupAvatar,
  validationClasses,
  elementTemplate,
  buttonOpenEditPopup,
  buttonOpenNewCardPopup,
  popupEdit,
  popupNewCard,
  popupImage,
  changeInputName,
  changeInputJob,
  cards,
  popupImageTitle,
  popupImagePicture,
  popupDelete,
  formEditElement,
  formNewCardElement,
  formAvatarElement
} from '../utils/constants.js'
import {
  PopupWithImage
} from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Api from '../components/Api.js';



const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/',
  token: '1fe5471e-49f3-40dc-8423-9e22c3958b5b',
  groupId: 'cohort-24'
})

const formEdit = new FormValidator(validationClasses, formEditElement);
formEdit.enableValidation();
const formNewCard = new FormValidator(validationClasses, formNewCardElement);
formNewCard.enableValidation();
const formAvatarValidation = new FormValidator(validationClasses, formAvatarElement);
formAvatarValidation.enableValidation();



let myId = '';
api.getProfileData()
  .then(res => {
    userInfoValues.setUserInfo(res);
    myId = res._id;

  })
  .catch((err) => {
    console.log(err);
  });
const openImagePopup = new PopupWithImage(popupImage, popupImageTitle, popupImagePicture);


let carddel = '';


function creatCard(item) {
  const card = new Card(myId, item, elementTemplate, {
    handleCardClick: (text, link) => {
      openImagePopup.open(text, link);
    },
    handleDeleteCard: () => {
      deleteCardPopup.open();
      carddel = card;
    },
    handleAddLike: () => {
      api.addLike(item._id)
        .then(res => {
          card.likeCount(res.likes);
        })
        .catch(err => console.log(err))
    },
    handlRemoveLike: () => {
      api.deleteCard(item._id)
        .then(res => card.likeCount(res.likes))
        .catch(err => console.log(err))
    },
  });
  return card.generateCard();
}




const deleteCardPopup = new PopupWithForm(popupDelete, {
  handleFormSubmit: (evt) => {
    api.deleteCard(carddel.getId())
      .then(() => {
        carddel.deleteCard();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        deleteCardPopup.close();
      });

  }

})



const cardList = new Section({
    renderer: (item) => {
      const card = creatCard(item);
      cardList.addItem(card);
    },
  },
  cards
);

const newCardPopup = new PopupWithForm(popupNewCard, {
  handleFormSubmit: (evt) => {
    const values = newCardPopup._getInputValues();
    newCardPopup.setLoading(true);
    api.addNewCard(values)
      .then(res => {
        const card = creatCard(res)
        cardList.addItem(card);
        newCardPopup.close();

      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        newCardPopup.setLoading(false);
      });
  }
});


buttonOpenNewCardPopup.addEventListener('click', function() {
  formNewCard.resetValidation();
  newCardPopup.open();
});

const popupEditProfile = new PopupWithForm(popupEdit, {
  handleFormSubmit: (evt) => {
    popupEditProfile.setLoading(true);
    const values = popupEditProfile._getInputValues();

    api.editUserProfile(values)
      .then((userData) => {
        userInfoValues.setUserInfo(userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.setLoading(false);
      });

    popupEditProfile.close();
  }
});


buttonOpenEditPopup.addEventListener('click', function() {
  popupEditProfile.setInputValues(userInfoValues.getUserInfo());
  popupEditProfile.open();
  formEdit.resetValidation();
});

const userInfoValues = new UserInfo(changeInputName, changeInputJob, avatar);



api.getInitialCards()
  .then(res => {
    cardList.renderItems(res);
  })
  .catch((err) => {
    console.log(err);
  });

const popupOpenAvatar = new PopupWithForm(popupAvatar, {
  handleFormSubmit: (evt) => {
    popupOpenAvatar.setLoading(true);
    const values = popupOpenAvatar._getInputValues();
    api.editAvatar(values[0])
      .then((res) => {
        userInfoValues.setUserInfo(res);
        popupOpenAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupOpenAvatar.setLoading(false);
      });

    popupEditProfile.close();
  }
});

avatar.addEventListener('click', function() {
  popupOpenAvatar.open();
  formAvatarValidation.resetValidation();
})
