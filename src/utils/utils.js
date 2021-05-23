import { Card } from "../components/Card.js";
import { popupOpenImage } from "../pages/index.js";


export const createCard = (dataElement) => {
  const card = new Card(dataElement, ".card-template", (name, link) => {
    popupOpenImage.open(name, link);
  });

  const cardElement = card.generateCard();
  return cardElement;
}
