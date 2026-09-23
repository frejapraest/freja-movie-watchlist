import { generateMovieCard } from "./helpers.js";

const movieSearchEl = document.getElementById("movie-search");
const searchButtonEl = document.getElementById("search-button");
const moviesContainerEl = document.getElementById("movies-container");
const placeholderContainer = document.getElementById("placeholder-container");
const noMovieResultsEl = document.getElementById("no-movie-results");

async function handleMovieData() {
  const { Search: movieList } = await fetch(
    `http://www.omdbapi.com/?apikey=546b0e9d&s=${movieSearchEl.value}&type=movie`,
  ).then((response) => response.json());

  if (movieList === undefined) {
    placeholderContainer.classList.add("hidden");
    noMovieResultsEl.classList.remove("hidden");
    moviesContainerEl.innerHTML = "";
    return;
  }

  let movieHtml = "";
  const moviesArray = [];

  for (const { imdbID: movieId } of movieList) {
    const { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID } =
      await fetch(
        `http://www.omdbapi.com/?apikey=546b0e9d&i=${movieId}&type=movie`,
      ).then((response) => response.json());

    placeholderContainer.classList.add("hidden");

    moviesArray.push({
      Poster,
      Title,
      imdbRating,
      Runtime,
      Genre,
      Plot,
      imdbID,
    });

    movieHtml += generateMovieCard(
      { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID },
      false,
    );
  }
  noMovieResultsEl.classList.add("hidden");
  moviesContainerEl.innerHTML = movieHtml;

  for (const movie of moviesArray) {
    document
      .getElementById(`button-${movie.imdbID}`)
      .addEventListener("click", () => {
        localStorage.setItem(movie.imdbID, JSON.stringify(movie));
        document
          .getElementById("add-icon")
          .classList.replace("fa-circle-plus", "fa-circle-check");
      });
  }
}

searchButtonEl.addEventListener("click", handleMovieData);
