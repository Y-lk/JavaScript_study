"use strict";

let str = "some";
//let strObj = new String(str); Code is depricated.

console.log(typeof(str));
console.log(typeof(strObj));

//

console.dir([1,2,3]);

//

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello!");
//     }
// };

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; Code is depricated.
//Object.setPrototypeOf(john, soldier);

// console.log(john.armor);
// john.sayHello();

// Делаем правильно.

const soldier1 = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello!");
    }
};

const john = Object.create(soldier1);

john.sayHello();