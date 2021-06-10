"use strict";

//const obj = new Object(); Устаревшее объявление объекта.

const options1 = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red"
  }
};

console.log(Object.keys(options1).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;

// for (let key in options){
//   if(typeof(options[key] === "object")){
//     for(let i in options[key]){
//       console.log(`Property ${i} have value ${options[key][i]}`);
//       counter++;
//     }
//   }else{
//     console.log(`Property ${key} have value ${options[key]}`);
//     counter++;
//   }
//   }

//   console.log(counter);

const options2 = {
  name: "test",
  width: 1024,
  height: 1024,
  colors: {
    border: "black",
    bg: "red"
  },
  makeTest: function()  {
    console.log("Test");
  }
};

options2.makeTest();

const {border,bg} = options2.colors;
console.log(border);