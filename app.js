
const express = require('express');
const cors = require('cors');

const menu = require('./data/data.json');

const app = express();

app.use(cors());


// / Healthcheck route
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running' });
});

// /items returns an array of all the menu items
app.get('/items', (request, response) => {
  try {
    response.status(200).json({ data: menu });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// /items/:id returns an item with the given id; returns a 404 if the item is not found
app.get('/items/:id', (request, response) => {
  try {
    const { id } = request.params;
    const menuItem = data.find((el) => el.id === id);

    if (menuItem) {
      return response.status(200).json({ data: menuItem });
    }
    response
      .status(404)
      .json({ error: `Error, item not found with id ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;