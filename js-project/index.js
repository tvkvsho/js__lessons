const movie = [
    {
        name: 'Star Wars',
        pg: 13,
        genre: 'fantasy',
        country: 'USA',
        img: 'star.jpg'
    },
    {
        name: 'Hobbit',
        pg: 13,
        genre: 'fantasy',
        country: 'USA',
        img: 'hobbit.jpg'
    },
    {
        name: 'Shrek',
        pg: 6,
        genre: 'cartoon',
        country: 'USA',
        img: 'shrek.jpg'
    },
    {
        name: 'Love Death + Robots',
        pg: 18,
        genre: 'sci-fi',
        country: 'USA',
        img: 'robots.jpg'
    },
    {
        name: '1 + 1',
        pg: 13,
        genre: 'drama',
        country: 'France',
        img: 'oneplusone.jpg'
    },
    {
        name: 'Klaus',
        pg: 6,
        genre: 'cartoon',
        country: 'Spain',
        img: 'klaus.jpg'
    },
    {
        name: 'Spirited away',
        pg: 6,
        genre: 'cartoon',
        country: 'Japan',
        img: 'sen.jpg'
    },
    {
        name: 'Yip Man',
        pg: 16,
        genre: 'aartial arts',
        country: 'Hong Kong',
        img: 'yipman.jpg'
    },
    {
        name: 'Howl\'s moving castle',
        pg: 6,
        genre: 'cartoon',
        country: 'Japan',
        img: 'howl.jpg'
    },
    {
        name: 'The Fifth Element',
        pg: 16,
        genre: 'action',
        country: 'France',
        img: '5element.jpg'
    },
    {
        name: 'Green Street Hooligans',
        pg: 16,
        genre: 'drama',
        country: 'United Kingdom',
        img: 'hooligans.jpg'
    },
    {
        name: 'Straight Outta Compton',
        pg: 16,
        genre: 'biographical',
        country: 'USA',
        img: 'compton.jpg'
    },
    {
        name: 'Chappie',
        pg: 16,
        genre: 'action',
        country: 'Mexico',
        img: 'chappie.jpg'
    },
    {
        name: 'Spider-Man: No Way Home',
        pg: 13,
        genre: 'action',
        country: 'USA',
        img: 'spiderman.jpg'
    },
    {
        name: 'House of Gucci',
        pg: 16,
        genre: 'biographical',
        country: 'USA',
        img: 'gucci.jpg'
    },
    {
        name: 'Home Team',
        pg: 6,
        genre: 'comedy',
        country: 'USA',
        img: 'hometeam.jpg'
    },
    {
        name: 'Ace Ventura: Pet Detective',
        pg: 13,
        genre: 'comedy',
        country: 'USA',
        img: 'aceventura.jpg'
    },
    {
        name: 'Dune',
        pg: 13,
        genre: 'action',
        country: 'Canada',
        img: 'dune.jpg'
    },
    {
        name: 'F9',
        pg: 13,
        genre: 'criminal',
        country: 'USA',
        img: 'f9.jpg'
    },
    {
        name: 'King Richard',
        pg: 13,
        genre: 'biographical',
        country: 'USA',
        img: 'richard.jpg'
    },
]


let out = document.querySelector('.all-movies');
let res = '';
let todayMovie = document.querySelector('.movie__today');

function movieOfTheDay() {
    todayMovie.innerHTML = `<img class="movie__today-img" src="./img/${movie[Math.round(Math.random() * movie.length)].img}">`
}

movieOfTheDay()

function allMovies() {
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

allMovies()