import { generateMovieCard } from "./helpers.js";
const watchlistEl = document.getElementById("watchlist");

for (const movie of Object.values({ ...localStorage })) {
  watchlistEl.innerHTML += generateMovieCard(JSON.parse(movie), true);
}
