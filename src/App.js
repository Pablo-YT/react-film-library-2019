import React from 'react';
import filmList from './FilmListing'



const App = () => {
  return (
    <main className="film-library">
      <section className="film-list">
        <h1 className="section-title">FILMS</h1>
        {filmList}
      </section>
    <section className="film-details">
        <h1 className="section-title">DETAILS</h1>
    </section>

    </main>
  );
}

export default App;
