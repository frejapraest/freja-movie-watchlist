export const generateMovieCard = ({
  Poster,
  Title,
  imdbRating,
  Runtime,
  Genre,
  Plot,
  imdbID,
}) =>
  `<div class="movie-with-line">
        <div class="movie">
            <img class="movie-poster" src="${Poster}"></img>
            <div class="movie-information">
                <div class="title-rating">
                    <h3>${Title}</h2>
                    <p class="rating"><i class="fa-solid yellow fa-star"></i>${imdbRating}</p>
                </div>
                <div class="runtime-genre-watchlist">
                    <p>${Runtime}</p>
                    <p>${Genre}</p>
                    <button class="add-to-watchlist-btn" id="button-${imdbID}"><i class="fa-solid fa-circle-plus"></i>Watchlist</button>
                </div>
                <p class="plot">${Plot}</p>
            </div>
        </div>
        <hr></hr>
    </div>`;
