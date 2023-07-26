const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all routes
app.use(cors());

const movieTitles = [
  "The Avengers",
  "All Dogs Go to Heaven",
  "The Aristocats",
  "The Brave Little Toaster",
  "The Lord of the Rings",
  "The Revenant",
  "Cats & Dogs",
];

// Route to get all movie titles
app.get('/all', (req, res) => {
  res.json(movieTitles);
});

// Route to search for movie titles
app.get('/find', (req, res) => {
  const { contains, startsWith } = req.query;
  let foundMovies = movieTitles;

  if (contains) {
    foundMovies = foundMovies.filter((title) =>
      title.toLowerCase().includes(contains.toLowerCase())
    );
  }

  if (startsWith) {
    foundMovies = foundMovies.filter((title) =>
      title.toLowerCase().startsWith(startsWith.toLowerCase())
    );
  }

  res.json(foundMovies);
});

// Route to delete all movie titles
app.delete('/all', (req, res) => {
  movieTitles.length = 0; // Clears the array
  res.sendStatus(200);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
