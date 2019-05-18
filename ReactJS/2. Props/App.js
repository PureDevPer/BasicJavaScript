import React from 'react';
import './App.css';
import Movie from './Movie';

const movieTitle = [
  "Matrix",
  "007",
  "Avengers"
]

const movieImages = [
  "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/61hDTk8M6YL._SY679_.jpg",
  "https://cnet2.cbsistatic.com/img/ZVJKdjD7OnLkaq07pz50JdmYCWo=/1600x900/2018/04/18/7d739d34-6ca7-484a-a9e2-73f4ff44878d/capture1.png"
]

function App() {
  return (
    <div className="App">
      <Movie title={movieTitle[0]} images={movieImages[0]} />
      <Movie title={movieTitle[1]} images={movieImages[1]} />
      <Movie title={movieTitle[2]} images={movieImages[2]} />
    </div>
  );
}

export default App;
