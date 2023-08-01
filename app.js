
const express = require('express');
const cors = require('cors');

const menu = require('./data.json');

const app = express();

app.use(cors());


// Healthcheck route
app.get('/', (request, response) => {
  response.status(200).json({ data: 'Service is running' });
});

app.get('/items', (request, response) => {
  try {
    // const { foods } = foodsData;
    response.status(200).json({ data: menu });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

// Getting a menu item
app.get('/items/:id', (request, response) => {
  try {
    const { id } = request.params;
    const menuItem = data.find((el) => el.id === id);

    if (menuItem) {
      return response.status(200).json({ data: menuItem });
    }
    response
      .status(404)
      .json({ error: `Could not find item with id ${id}` });
  } catch (err) {
    response.status(500).json({ error: err.message });
  }
});

module.exports = app;