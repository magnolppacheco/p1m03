const express = require('express');
const cors = require('cors');

const app = express();

const controller = require('./controllers/cardsController');

app.use(cors());
app.use(express.json());

app.get('/', controller.findAllCards);
app.get('/card/:id', controller.findCardById);
app.post('/card', controller.createCard);
app.put('/card', controller.updateCard);
app.delete('/card/:id', controller.deleteCard);

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
