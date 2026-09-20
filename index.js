import { generateMovieCard } from "./helpers.js";

const movieSearchEl = document.getElementById("movie-search");
const searchButtonEl = document.getElementById("search-button");
const moviesContainerEl = document.getElementById("movies-container");
const placeholderContainer = document.getElementById("placeholder-container");

async function handleMovieData() {
  const { Search: movieList } = await fetch(
    `http://www.omdbapi.com/?apikey=546b0e9d&s=${movieSearchEl.value}&type=movie`,
  ).then((response) => response.json());

  for (const { imdbID: movieId } of movieList) {
    const { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID } =
      await fetch(
        `http://www.omdbapi.com/?apikey=546b0e9d&i=${movieId}&type=movie`,
      ).then((response) => response.json());

    placeholderContainer.classList.add("hidden");
    moviesContainerEl.insertAdjacentHTML(
      "beforeend",
      generateMovieCard(
        { Poster, Title, imdbRating, Runtime, Genre, Plot, imdbID },
        false,
      ),
    );
    document
      .getElementById(`button-${movieId}`)
      .addEventListener("click", () => {
        localStorage.setItem(
          movieId,
          JSON.stringify({
            Poster,
            Title,
            imdbRating,
            Runtime,
            Genre,
            Plot,
            imdbID,
          }),
        );
      });
  }
}

searchButtonEl.addEventListener("click", handleMovieData);
