"use strict";

// const arr = [1,23,3,4,5,6];

// arr.pop();
// console.log(arr);

// arr.push(10);
// console.log(arr);

// for (let i = 0; i<arr.length; i++){
//   console.log(arr[i]);
// }

// for(let value of arr){
//   console.log(value);
// }

// const arr = [1,2,3,4,5,6];

// arr.forEach(function(item, i, arr) {
//   console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// consoledsdfssadf.log(products);
// console.log(products.join("; "));

const arr = [1,23,3,4,5,6];
arr.sort(compereNum);
console.log(arr);

function compereNum(a, b){
  return a - b;
}