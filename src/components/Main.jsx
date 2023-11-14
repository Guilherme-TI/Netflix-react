// components/Main.js

import React, { useState } from 'react';
import './Main.css';

const movies = [
  { title: "Filme 1", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg" },
  { title: "Filme 2", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/mkEQgdQcvmxSYvY4bMhabxLjjXY.jpg" },
  { title: "Filme 3", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/omV2IW2OlFTSw6Hih13hz6lFdvP.jpg" },
  { title: "Filme 4", image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/hDKUj98FmSkje7i4VGnt0ah1XdO.jpg" },
  { title: "Filme 5", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/1yUbmAiw2cUSpyXNIaiST7JzCtG.jpg" },
  { title: "Filme 6", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/hNEG0e6aPq0EwrugX5A5rCc9TGg.jpg" },
  { title: "Filme 7", image: "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/8hjno4uE19pm0qlfUDcM8e5WK13.jpg" },
  { title: "Filme 8", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/sPmmgdmApfjX9x2mg02bo0aUOU9.jpg" },
  { title: "Filme 9", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg" },
  { title: "Filme 10", image: "https://www.themoviedb.org/t/p/w220_and_h330_face/ch1BGjadaiPU59zYbb6zPUTZtyO.jpg" },
];

const trailers = [
  { videoId: "F3OxA9Cz17A" },
  { videoId: "nsdjzHqlb_Q" },
  { videoId: "0JZ8WGVSrwM" },
  { videoId: "D0hv6p6ykkU" },
  { videoId: "h2lVX71L_3A" },
  { videoId: "aCGAn5DvngY" },
  { videoId: "kjTHrbPaDEU" },
  { videoId: "YxL9wTkEgSY" },
  { videoId: "Ujs1Ud7k49M" },
  { videoId: "pNI58a-njrs" },
  // Adicione mais trailers conforme necessário
];

const Main = () => {
  const [showAllMovies, setShowAllMovies] = useState(false);
  const [showAllTrailers, setShowAllTrailers] = useState(false);

  const toggleShowAllMovies = () => {
    setShowAllMovies(!showAllMovies);
  };

  const toggleShowAllTrailers = () => {
    setShowAllTrailers(!showAllTrailers);
  };

  const visibleMovies = showAllMovies ? movies : movies.slice(0, 6);
  const visibleTrailers = showAllTrailers ? trailers : trailers.slice(0, 6);

  return (
    <div className='main'>
      <h1>Tendências</h1>

      {/* Catálogo de Filmes */}
      <div className="main-container">
        {visibleMovies.map((movie, index) => (
          <a key={index} href={`/${movie.title}`}>
            <div className="movie-card">
              <img src={movie.image} alt={movie.title} />
            </div>
          </a>
        ))}
        {movies.length > 6 && (
          <button className="show-more-button" onClick={toggleShowAllMovies}>
            {showAllMovies ? 'Mostrar Menos' : 'Mostrar Mais'}
          </button>
        )}
      </div>

      {/* Catálogo de Trailers */}
      <h2>Trailers Populares</h2>
      <div className="main-container trailer-container">
        {visibleTrailers.map((trailer, index) => (
            <iframe
              width="300"
              height="200"
              src={`https://www.youtube.com/embed/${trailer.videoId}`}
              title={trailer.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
        ))}
        {trailers.length > 6 && (
          <button className="show-more-button" onClick={toggleShowAllTrailers}>
            {showAllTrailers ? 'Mostrar Menos' : 'Mostrar Mais'}
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
