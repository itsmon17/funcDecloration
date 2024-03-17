//? Задание 1
let string = " hello my friends ";

function removeSpaces(param) {
  return param.replace(/\s+/g, "");
}

string = removeSpaces(string);
console.log(string);

//? Задание 2

let array = [1, 2, 3, 4, 5, 6, 7, 8];
let array2 = [];

function lastElement(param) {
  if (param.length === 0) {
    return undefined;
  }
  return param[param.length - 1];
}

console.log(lastElement(array));
console.log(lastElement(array2));

//? Задание 3

let arr = ["Aimon"];
let arr2 = [" Dunaeva"];

function joinArray(param1, param2) {
  return param1 + param2;
}
console.log(joinArray(arr, arr2));

//? Задание 4

let str = "hello";
// let str2 = "aimon dunaeva";

function capitaLetter(str) {
  if (str === 0) {
    return undefined;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitaLetter(str));
// console.log(capitaLetter(str2));
