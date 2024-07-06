"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}


// const a = prompt("What's one of the last movies you saw?", ""),
//       b = prompt("How much would you rate it?", ""),
//       c = prompt("What's one of the last movies you saw?", ""),
//       d = prompt("How much would you rate it?", "");
// personalMovieDB.movies[a] = b
// personalMovieDB.movies[c] = d
//// формирование вопросов с пом цикла 
function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms()


function detectPersonalLevel() {
    //// условия для определения количества просмотренных фильмов 
    if (personalMovieDB.count < 10) {
        console.log('few')
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('good')
    } else if (personalMovieDB.count <= 30) {
        console.log('great')
    } else {
        console.log('error')
    }
}
detectPersonalLevel()


function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB)
    }
}
showMyDB(personalMovieDB.privat)


function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`)
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`)
    }
}
writeYourGenres()



//////////////////////////////////////////////////////////////////////////


//// операторы
// && - возвращает первое ложное значение или последнее правдивое значение
// || - возвращает первое правдивое значение или последнее ложное значение


//// циклы
// let num = 50
// while (num < 55) {
//     console.log(num)
//     num++
// }
//// ===
// do {
//     console.log(num)
//     num++
// } while (num < 55)
//// ===
// for (let i = 1; i < 8; i++) {
//     if (i === 6) {
//         // break // прерывает цикл когда значение равняется 6
//         continue // пропускает значение равное 6
//     }
//     console.log(i)
// }


//// цикл в цикле
// let result = ''
// const lenght = 7
// for (let i = 1; i < lenght; i++) {
//     for(let j = 0; j < i; j++) {
//         result += "*"
//     }
//     result += "\n"
// }
// console.log(result)


//// вывод четных чисел
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     } else {
//         continue
//     }
// }


//// заполнение массива числами
// let arr = []
// for (let i = 5; i < 11; i++) {
//     arr[i - 5] = i;
// }
// console.log(arr)


//5
//5---10---15
// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= times; i++) {
//         str += `${num * i}---`;
//     }
//     return str;
// }
// getMathResult(10, 5);
// console.log(getMathResult(10, 5))


////методы
// const str = 'test'
// console.log(str.toUpperCase()) // TEST
// console.log(str.toLowerCase()) // test
// console.log(str.indexOf('st')) // 2
////
// console.log(str.slice(2, 4)) // st
// console.log(str.slice(2)) // st
// console.log(str.slice(-2)) // st
// console.log(str.substring(3)) // t
////
// const num = 12.2
// console.log(Math.round(num)) // 12
// console.log(parseInt(num)) // '12.2px' => 12


