const cardsService = require('../services/cardsService');

function findAllCards(req, res) {
  const allCards = cardsService.findAllCards();
  res.send(allCards);
}

function findCardById(req, res) {
  const id = req.params.id;
  const uniqueCard = cardsService.findCardsById(id);
  res.send(uniqueCard);
}

function createCard(req, res) {
  const card = req.body;
  const cardCreated = cardsService.createCard(card);
  res.send(cardCreated);
}

function updateCard(req, res) {
  const card = req.body;
  const cardUpdated = cardsService.updateCard(card);
  res.send(cardUpdated);
}

function deleteCard(req, res) {
  const id = req.params.id;
  const deletedCard = cardsService.deleteCard(id);
  res.send(deletedCard);
}

module.exports = {
  findAllCards,
  findCardById,
  createCard,
  updateCard,
  deleteCard,
};
