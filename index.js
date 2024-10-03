// API http://www.omdbapi.com/?i=tt3896198&apikey=64801226
const movieListEl = document.querySelector('.movie')
const getMovie = localStorage.getItem("getMovie")

async function onSearchChange(event) {
    const getMovie = event.target.value;
    renderMovies(getMovie)
}

async function renderMovies(getMovie) {
    const movies = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=64801226=${getMovie}`)
    const moviesData = await movies.json();
    movieListEl.movieHTML = moviesData.Search.map((movie) => movieHTML(movie)).join('')
}

function movieHTML(movie) {
    return `<h2 class="movie__title">${movie.title}</h2>
                    <img class="movie__poster" src="${movie.poster}" alt="">
                    <p class="movie__rating">${movie.rating}</p>
                    <p class="runtime">${movie.runtime}</p>
                    <p class="plot">${movie.plot}</p>`
}

renderMovies(getMovie)
