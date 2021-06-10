"use strict";

// let a = 5;
//     b = a;
// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 1
// };

// const copy1 = obj; //Ссылка.

// copy1.a = 10;

// console.log(copy1);
// console.log(obj);

function copy(mainObj){
  let objCopy = {};
  
  let key;
  for(key in mainObj){
    objCopy[key] = mainObj[key];
  }
  return objCopy;
}

const numbers = {
  a: 2,
  b: 5,
  c: {
    x: 7,
    y: 4
  }
};

const newNumbers = copy(numbers);
newNumbers.c.x = 10;

newNumbers.a = 10;
console.log(newNumbers);
console.log(numbers);

const add = {
  d: 17,
  e: 20
};

console.log(Object.assign(numbers, add));