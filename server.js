const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // Choose an appropriate port number

// Enable CORS for all routes
app.use(cors());

// Serve the JSON data
app.get('/data', (req, res) => {
  // Replace this URL with the actual URL of the JSON data
  const dataUrl = 'https://www.liverpool.ac.uk/app-data/study-abroad/courses.json';

  fetch(dataUrl)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
