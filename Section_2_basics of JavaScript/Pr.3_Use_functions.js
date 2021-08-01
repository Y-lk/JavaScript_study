/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("How many films you have watched?", "");

    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
        const numberOfFilms = +prompt("How many films you have watched?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function showMyDB (hidden){
    if (!hidden){
        console.log(personalMovieDB);
    }
    else{
        console.log("Our personalMovieDB is false.");
    }
}

showMyDB(personalMovieDB.private);


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt("What have you watched last film?", ""),
              b = prompt("Please,give the rating this film.", "");
    
        if(a != null && b != null && a != "" && b != "" && a.length < 50 && b.length < 50)
        {
        personalMovieDB.movies[a] = b;
        }
        else {
        console.log("error.");
        i--;
        }
    }
}

//rememberMyFilms();


function detectPersonalLevel(){
    if (personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов.");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count >= 10){
        console.log("Вы классический зритель.");
    }else if (personalMovieDB.count > 30){
        console.log("Вы киноман.");
    }else{
        console.log("Произошла ошибка.");
    }
}

//detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1;i <= 3; i++){
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;        
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // Можно делать и так.
    }
}

writeYourGenres();