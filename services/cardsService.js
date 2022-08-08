const cards = require('../mocks/cards');
const CardsEntity = require('../entities/cardsEntity');

function findAllCards() {
  return cards;
}

function findCardsById(id) {
  let cardFinded;

  cards.map((card) => {
    if (card.id === id) {
      cardFinded = card;
    }
  });

  return cardFinded;
}

function createCard(card) {
  const newCard = new CardsEntity(card);
  newCard.validate();

  cards.push(newCard);
  return newCard;
}

function updateCard(card) {
  const updateCard = new CardsEntity(card);
  updateCard.validate();

  const updatedCard = {
    ...updateCard.getCards(),
  };

  cards.map((eachCard, index) => {
    if (eachCard.id === updateCard.id) {
      cards.splice(index, 1, updatedCard);
    }
  });

  return updatedCard;
}

function deleteCard(id) {
  let cardFinded;
  console.log('lista: ', cards);
  cards.map((card, index) => {
    if (card.id === id) {
      cardFinded = card;
      cards.splice(index, 1);
    }
  });

  return cardFinded;
}

module.exports = {
  findAllCards,
  findCardsById,
  createCard,
  updateCard,
  deleteCard,
};
