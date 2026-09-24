import { generateMovieCard } from "./helpers.js";

const watchlistEl = document.getElementById("watchlist");
const placeholderContainerWatchlistEl = document.getElementById(
  "placeholder-container-watchlist",
);

const checkList = (array) => {
  array.length <= 0
    ? placeholderContainerWatchlistEl.classList.remove("hidden")
    : placeholderContainerWatchlistEl.classList.add("hidden");
};

checkList(localStorage);

for (const movie of Object.values(localStorage)) {
  const movieObj = JSON.parse(movie);
  watchlistEl.insertAdjacentHTML(
    "beforeend",
    generateMovieCard(movieObj, true, false),
  );

  document
    .getElementById(`button-${movieObj.imdbID}`)
    .addEventListener("click", () => {
      localStorage.removeItem(movieObj.imdbID);
      document.getElementById(movieObj.imdbID).remove();
      checkList(localStorage);
    });
}
