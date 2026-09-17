import { generateMovieCard } from "./helpers.js";

const movieSearchEl = document.getElementById("movie-search");
const searchButtonEl = document.getElementById("search-button");
const moviesContainerEl = document.getElementById("movies-container");

async function handleMovieData() {
  const { Search: movieList } = await fetch(
    `http://www.omdbapi.com/?apikey=546b0e9d&s=${movieSearchEl.value}&type=movie`,
  ).then((response) => response.json());

  let moviesHtml = "";
  for (const { imdbID: movieId } of movieList) {
    const movie = await fetch(
      `http://www.omdbapi.com/?apikey=546b0e9d&i=${movieId}&type=movie`,
    ).then((response) => response.json());

    moviesHtml += generateMovieCard(movie);
  }

  moviesContainerEl.innerHTML = moviesHtml;
}

searchButtonEl.addEventListener("click", handleMovieData);
