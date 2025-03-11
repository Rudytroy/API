const axios = require('axios');

const getPokemon = async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json({
            name: response.data.name,
            height: response.data.height,
            weight: response.data.weight,
            sprites: response.data.sprites.front_default
        });
    } catch (error) {
        res.status(500).json({ error: 'Pokémon no encontrado' });
    }
};

module.exports = { getPokemon };
