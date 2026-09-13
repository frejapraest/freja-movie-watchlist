export const generateMovieCard = ({
  Poster,
  Title,
  imdbRating,
  Runtime,
  Genre,
  Plot,
}) =>
  `<div>
        <img src="${Poster}"></img>
        <div>
            <div>
                <h2>${Title}</h2>
                <p>${imdbRating}</p>
            </div>
            <div>
                <p>${Runtime}</p>
                <p>${Genre}</p>
                <button id="add-to-watchlist-btn">Watchlist</button>
            </div>
            <p>${Plot}</p>
        </div>
    </div>`;
