import { generateMovieCard } from "./helpers.js";
const watchlistEl = document.getElementById("watchlist");

for (const movie of Object.values({ ...localStorage })) {
  const movieObj = JSON.parse(movie);
  watchlistEl.insertAdjacentHTML(
    "beforeend",
    generateMovieCard(movieObj, true),
  );

  document
    .getElementById(`button-${movieObj.imdbID}`)
    .addEventListener("click", () => {
      localStorage.removeItem(movieObj.imdbID);
      document.getElementById(movieObj.imdbID).remove();
    });
}
