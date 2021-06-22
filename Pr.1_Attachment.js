"use strict";

const numberOfFilms = +prompt("How many films you have watched?", "");


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("What have you watched last film?", ""),
      b = prompt("Please,give the rating this film.", ""),
      c = prompt("What have you watched last film?", ""),
      d = prompt("Please,give the rating this film.", "");

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;


      console.log(personalMovieDB);
