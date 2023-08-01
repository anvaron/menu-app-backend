// Start the server and listen for incoming requests to the API

// Get environment variables
require('dotenv').config();

// Import the application
const app = require('./app');

// Server listening for requests on PORT
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});