
const movieListEl = document.querySelector('.movie')
const searchInput = document.querySelector('.search-bar')

async function onSearchChange(event) {
    const getMovie = event.target.value;
    if (getMovie) {
        renderMovies(getMovie);
    }
    else {
        movieListEl.innerHTML = "";
    }
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

setTimeout ( () => {
    renderMovies();
}, 1000);



