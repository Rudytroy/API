const axios = require('axios');

const getMovies = (req, res) => {
    res.json([
        { id: 1, title: "Inception", year: 2010 },
        { id: 2, title: "The Matrix", year: 1999 }
    ]);
};

const searchMovie = async (req, res) => {
    try {
        const { title } = req.params;
        const API_KEY = process.env.OMDB_API_KEY;
        const response = await axios.get(`https://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al buscar la película' });
    }
};

module.exports = { getMovies, searchMovie };
