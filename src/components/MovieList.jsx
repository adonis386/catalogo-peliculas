// MovieList.jsx
import React from 'react';
import MovieItem from './MovieItem';

function MovieList({ movies }) {
  const moviesWithPosters = movies.filter(movie => movie && movie.poster_path); // Filtra las películas

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {moviesWithPosters.map((movie) => ( // Usa el array filtrado
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;