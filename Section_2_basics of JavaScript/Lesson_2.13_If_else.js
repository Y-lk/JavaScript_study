"use stict";

// if (4==9){
//   console.log("Ok!");
// }else{
//   console.log("error.");
// }

// const num = 50;

// if(num<49){
//   console.log("error.");
// }else if(num>100){
//   console.log("Many");
// }else{
//   console.log("Ok!");
// }

// (num === 50) ? console.log("Ok!") : console.log("error.");


const num = 50;

switch (num) {
  case 49:
    console.log("False.");
  break;
  case 100:
    console.log("False.");
  break;
  case 50:
    console.log("True.");
  break;
  default:
    console.log("Try another day.");
    break;
}