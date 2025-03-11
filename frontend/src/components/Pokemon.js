import { useState } from "react";
import axios from "axios";

const Pokemon = () => {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState("");  

    const searchPokemon = async () => {
        try {
            setError("");  
            const response = await axios.get(`http://localhost:4000/api/pokemon/${pokemonName.toLowerCase()}`);
            if (!response.data || response.data.name !== pokemonName.toLowerCase()) {
                setError("No se encontró ese Pokémon.");
                setPokemonData(null);
            } else {
                setPokemonData(response.data);
            }
        } catch (error) {
            console.error("Error en el frontend:", error);
            setError("Hubo un problema al buscar el Pokémon.");
        }
    };

    return (
        <div>
            <h2>Buscar Pokémon</h2>
            <input 
                type="text" 
                value={pokemonName} 
                onChange={(e) => setPokemonName(e.target.value)} 
                placeholder="Ingresa un Pokémon (ej. Pikachu)"
            />
            <button onClick={searchPokemon}>Buscar</button>

            {error && <p style={{ color: "red" }}>{error}</p>}  {/* ✅ Muestra error */}

            {pokemonData && (
                <div>
                    <h3>{pokemonData.name.toUpperCase()}</h3>
                    <img 
                        src={pokemonData.sprites} 
                        alt={pokemonData.name} 
                        style={{ width: "200px", height: "200px" }} 
                    />
                    <p>Peso: {pokemonData.weight} kg</p>
                    <p>Altura: {pokemonData.height} m</p>
                </div>
            )}
        </div>
    );
};

export default Pokemon;
