// MovieItem.jsx (usando condicional)
import React from 'react';

function MovieItem({ movie }) {
  if (movie && movie.poster_path) { // Verifica si movie y movie.poster_path existen
    return (
      <div className="border rounded p-2">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        <h3 className="font-bold">{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    );
  } else {
    return (
      <div className="border rounded p-2">
        {/* Mostrar un mensaje o imagen alternativa si no hay póster */}
        <p>No poster available</p> {/* O una imagen placeholder */}
        <h3 className="font-bold">{movie.title}</h3> {/* movie.title siempre debería estar */}
        <p>{movie.overview}</p> {/* movie.overview siempre debería estar */}
      </div>
    );
  }
}

export default MovieItem;