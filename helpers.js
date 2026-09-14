export const generateMovieCard = ({
  Poster,
  Title,
  imdbRating,
  Runtime,
  Genre,
  Plot,
}) =>
  `<div class="movie-with-line">
        <div class="movie">
            <img src="${Poster}"></img>
            <div class="movie-information">
                <div class="title-rating">
                    <h3>${Title}</h2>
                    <p>${imdbRating}</p>
                </div>
                <div class="runtime-genre-watchlist">
                    <p>${Runtime}</p>
                    <p>${Genre}</p>
                    <button id="add-to-watchlist-btn">Watchlist</button>
                </div>
                <p>${Plot}</p>
            </div>
        </div>
        <hr></hr>
    </div>`;
