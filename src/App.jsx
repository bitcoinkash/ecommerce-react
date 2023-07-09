import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";


const API_URL = "http://www.omdbapi.com/?apikey=15d7d295";

const movie1 = {
  Title: "The Matrix Revisited",
  Year: "2001",
  imdbID: "tt0295432",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMTkzNjg3NjE4N15BMl5BanBnXkFtZTgwNTc3NTAwNzE@._V1_SX300.jpg",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Matrix");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <img 
        src={SearchIcon} 
        alt="Search" 
        onClick={() => searchMovies(searchTerm)} />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
