import React, { useState } from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList'; // Importa MovieList

function App() {
  const [movies, setMovies] = useState([]); // Estado para almacenar las películas
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  const searchMovies = async (term) => {
    setSearchTerm(term); // Actualiza el término de búsqueda
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=f339b9b7aa4ec3827c022b6fa7cf3f13&query=${term}`
      );
      const data = await response.json();
      setMovies(data.results); // Actualiza el estado con los resultados
    } catch (error) {
      console.error("Error al buscar películas:", error);
      // Manejo de errores: podrías mostrar un mensaje al usuario
    }
  };

  return (
    <>
      <div className='bg-amber-400 text-center p-2'>
        <h1 className='text-4xl text-blue-900 font-bold'>Lista de Peliculas</h1>
      </div>

      <div className='container mx-auto p-4'>
        <Search onSearch={searchMovies} /> {/* Pasa la función searchMovies a Search */}
        {/* Aquí renderizamos MovieList */}
        <MovieList movies={movies} /> {/* Pasa las películas a MovieList */}
        {/* {movies.length > 0 && <MovieList movies={movies} />}  */}
      </div>
    </>
  );
}

export default App
