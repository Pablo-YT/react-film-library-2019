import React from 'react'
import TMDB from './TMDB';

const filmList = TMDB.films.map((film) => {
  
    return (
      <article className="film-row" key={film.id}>
          <img src={`http://image.tmdb.org/t/p/w780${film.poster_path}`} alt={film.title} />
            <div className="film-summary">
              <h2>{film.title}</h2>
              <p>{new Date(film.release_date).getFullYear()}</p>
            </div>
      </article>
    )
  })

export default filmList;