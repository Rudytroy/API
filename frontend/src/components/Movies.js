import { useState } from "react";
import axios from "axios";

const Movies = () => {
    const [title, setTitle] = useState("");
    const [movieData, setMovieData] = useState(null);
    const [error, setError] = useState("");  

    const searchMovie = async () => {
        try {
            setError("");  
            setMovieData(null);  
            const response = await axios.get(`http://localhost:4000/api/movie/${title}`);

            if (!response.data || response.data.Response === "False") {
                setError("No se encontró la película.");
                setMovieData(null);
            } else {
                setMovieData(response.data);
            }
        } catch (error) {
            console.error("Error en el frontend:", error);
            setError("Hubo un problema al buscar la película.");
        }
    };

    return (
        <div>
            <h2>Buscar Película</h2>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Ingresa el título de la película"
            />
            <button onClick={searchMovie}>Buscar</button>

            {error && <p style={{ color: "red" }}>{error}</p>}  {/* ✅ Muestra error */}

            {movieData && (
                <div>
                    <h3>{movieData.Title}</h3>
                    <img src={movieData.Poster} alt={movieData.Title} />
                    <p>Año: {movieData.Year}</p>
                    <p>Género: {movieData.Genre}</p>
                    <p>Director: {movieData.Director}</p>
                    <p>Resumen: {movieData.Plot}</p>
                </div>
            )}
        </div>
    );
};

export default Movies;
