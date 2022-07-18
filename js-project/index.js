const movie = [
    {
        name: 'Star Wars',
        pg: 13,
        genre: 'Fantasy',
        country: 'USA',
        img: 'star.jpg'
    },
    {
        name: 'Hobbit',
        pg: 13,
        genre: 'Fantasy',
        country: 'USA',
        img: 'hobbit.jpg'
    },
    {
        name: 'Shrek',
        pg: 6,
        genre: 'Cartoon',
        country: 'USA',
        img: 'shrek.jpg'
    },
    {
        name: 'Love Death + Robots',
        pg: 18,
        genre: 'Sci-fi',
        country: 'USA',
        img: 'robots.jpg'
    },
    {
        name: '1 + 1',
        pg: 13,
        genre: 'Drama',
        country: 'France',
        img: 'oneplusone.jpg'
    },
    {
        name: 'Klaus',
        pg: 6,
        genre: 'Cartoon',
        country: 'Spain',
        img: 'klaus.jpg'
    },
    {
        name: 'Spirited away',
        pg: 6,
        genre: 'Cartoon',
        country: 'Japan',
        img: 'sen.jpg'
    },
    {
        name: 'Yip Man',
        pg: 16,
        genre: 'Martial arts',
        country: 'Hong Kong',
        img: 'yipman.jpg'
    },
    {
        name: 'Howl\'s moving castle',
        pg: 6,
        genre: 'Cartoon',
        country: 'Japan',
        img: 'howl.jpg'
    },
    {
        name: 'The Fifth Element',
        pg: 16,
        genre: 'Action',
        country: 'France',
        img: '5element.jpg'
    },
    {
        name: 'Green Street Hooligans',
        pg: 18,
        genre: 'Drama',
        country: 'United Kingdom',
        img: 'hooligans.jpg'
    },
    {
        name: 'Straight Outta Compton',
        pg: 16,
        genre: 'Biographical',
        country: 'USA',
        img: 'compton.jpg'
    },
    {
        name: 'Chappie',
        pg: 16,
        genre: 'Action',
        country: 'Mexico',
        img: 'chappie.jpg'
    },
    {
        name: 'Spider-Man: No Way Home',
        pg: 13,
        genre: 'Action',
        country: 'USA',
        img: 'spiderman.jpg'
    },
    {
        name: 'House of Gucci',
        pg: 16,
        genre: 'Biographical',
        country: 'USA',
        img: 'gucci.jpg'
    },
    {
        name: 'Home Team',
        pg: 6,
        genre: 'Comedy',
        country: 'USA',
        img: 'hometeam.jpg'
    },
    {
        name: 'Ace Ventura: Pet Detective',
        pg: 13,
        genre: 'Comedy',
        country: 'USA',
        img: 'aceventura.jpg'
    },
    {
        name: 'Dune',
        pg: 13,
        genre: 'Action',
        country: 'Canada',
        img: 'dune.jpg'
    },
    {
        name: 'F9',
        pg: 13,
        genre: 'Criminal',
        country: 'USA',
        img: 'f9.jpg'
    },
    {
        name: 'King Richard',
        pg: 13,
        genre: 'Biographical',
        country: 'USA',
        img: 'richard.jpg'
    },
]


let out = document.querySelector('.all-movies');
let res = '';
let todayMovie = document.querySelector('.movie__today');
let searchByNameBtn = document.querySelector('.name');

// Movie of the day function
function movieOfTheDay() {
    todayMovie.innerHTML = `<img class="movie__today-img" src="./img/${movie[Math.round(Math.random() * movie.length)].img}">`
}

movieOfTheDay()

// All movies function
function allMovies() {
    res = '';
    for(let i = 0; i < movie.length; i++) {
        if(movie[i].name){
            res += `
                        <div class="movie">
                            <img class="movie__cover" src="./img/${movie[i].img}">
                            <h2 class="movie__title">${movie[i].name}</h2>
                            <p class="movie__genre"><b>Genre:</b> ${movie[i].genre}</p>
                            <p class="movie__age"><b>Age:</b> ${movie[i].pg}+</p>
                            <p class="movie__country"><b>Country:</b> ${movie[i].country}</p>
                        </div>
                        `
        }
    }
    out.innerHTML = res;
}

allMovies();

// Search by name function
let searchInp = document.querySelector('.search-by-name');
function searchByName() {
    res = '';
    for (let i = 0; i < movie.length; i++) {
        if(movie[i].name == searchInp.value){
            res += `
                <div class="movie">
                    <img class="movie__cover" src="./img/${movie[i].img}">
                    <h2 class="movie__title">${movie[i].name}</h2>
                    <p class="movie__genre"><b>Genre:</b> ${movie[i].genre}</p>
                    <p class="movie__age"><b>Age:</b> ${movie[i].pg}+</p>
                    <p class="movie__country"><b>Country:</b> ${movie[i].country}</p>
                    <button class="back-to-all" onclick="allMovies()">Back to all movies</button>
                </div>
            `
        }
    }
    out.innerHTML = res;
}
searchByNameBtn.onclick = searchByName;

// Search by genre
let genres = document.getElementById('genres');
let genresBtn = document.querySelector('.genre');
let ageCheck = document.getElementById('c1');

function searchByGenres(){
    res = '';
    for (let i = 0; i < movie.length; i++){
        if(movie[i].genre == genres.value && ageCheck.checked == false && movie[i].pg < 18){
            res += `
                <div class="movie">
                    <img class="movie__cover" src="./img/${movie[i].img}">
                    <h2 class="movie__title">${movie[i].name}</h2>
                    <p class="movie__genre"><b>Genre:</b> ${movie[i].genre}</p>
                    <p class="movie__age"><b>Age:</b> ${movie[i].pg}+</p>
                    <p class="movie__country"><b>Country:</b> ${movie[i].country}</p>
                </div>
            `
        } else if (movie[i].genre == genres.value && ageCheck.checked == true && movie[i].pg >= 18) {
            res += `
                <div class="movie">
                    <img class="movie__cover" src="./img/${movie[i].img}">
                    <h2 class="movie__title">${movie[i].name}</h2>
                    <p class="movie__genre"><b>Genre:</b> ${movie[i].genre}</p>
                    <p class="movie__age"><b>Age:</b> ${movie[i].pg}+</p>
                    <p class="movie__country"><b>Country:</b> ${movie[i].country}</p>
                </div>
            `
        }
    }
    out.innerHTML = res + `<button class="back-to-all" onclick="allMovies()">Back to all movies</button>`;
}
genresBtn.onclick = searchByGenres

// Movies counter function
function movieCount() {
    document.querySelector('.counter').innerHTML = `Movies in catalogue <b>${movie.length}</b>`;
}
movieCount();
