const namberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: namberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('один из просмотреных фильмов?', ''),
      b = prompt('На сколько оцените его?',''),
      c = prompt('Один из просмотренных фильмов?',''),
      d = prompt('На сколько оцените его?','');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);