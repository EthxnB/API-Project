// API http://www.omdbapi.com/?i=tt3896198&apikey=64801226
const movieListEl = document.querySelector('.movie')
const getMovie = localStorage.getItem("getMovie")

async function onSearchChange(event) {
    const getMovie = event.target.value;
    renderMovies(getMovie)
}

async function renderMovies(getMovie) {
    const movies = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=64801226&s=${getMovie}`);
    const moviesData = await movies.json();
    console.log(moviesData)
    if (moviesData.Search) {
        movieListEl.innerHTML = moviesData.Search.map((movie) => movieHTML(movie)).join("")
    } else {
        movieListEl.innerHTML = "<p>Movie not found in database</p>"
    }
}

function movieHTML(movie) {
    return `<h2 class="movie__title">${movie.Title}</h2>
    <img class="movie__poster" src="${movie.Poster}" alt="">
    <p class="movie__year">Year: ${movie.Year}</p>
    <p class="type">Type: ${movie.Type}</p>`
}

renderMovies(getMovie)

setTimeout(() => {
    renderMovies()
}, 1000);


// const movieListEl = document.querySelector('.movie')
// const getMovie = localStorage.getItem("getMovie")

// async function onSearchChange(event) {
//     const getMovie = event.target.value
//     renderMovies(getMovie)
// }

// async function renderMovies(getMovie) {
//     const movies = await fetch(
//       `http://www.omdbapi.com/?i=tt3896198&apikey=64801226&s=${getMovie}`
//     );
//     const moviesData = await movies.json();
//     if (moviesData.Search && Array.isArray(moviesData.Search)) {
//       movieListEl.innerHTML = moviesData.Search.map((movie) =>
//         movieHTML(movie)
//       ).join("");
//     } else {
//       movieListEl.innerHTML = "<p>No movies found.</p>";
//     }
//   }
//   function movieHTML(movie) {
//     return `<h2 class="movie__title">${movie.Title}</h2>
//                       <img class="movie__poster" src="${movie.Poster}" alt="">
//                       <p class="movie__rating">${movie.imdbRating}</p>
//                       <p class="runtime">${movie.Runtime}</p>
//                       <p class="plot">${movie.Plot}</p>`;
//   }

//   renderMovies(getMovie)


