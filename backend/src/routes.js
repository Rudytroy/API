const express = require('express');
const { getMovies, searchMovie } = require('./controllers/moviesController'); 
const { getPokemon } = require('./controllers/pokemonController');

const router = express.Router();
router.get('/movies', getMovies);
router.get('/movie/:title', searchMovie);
router.get('/pokemon/:name', getPokemon);

module.exports = router;

