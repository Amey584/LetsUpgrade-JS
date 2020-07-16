let txt  = "Machine Learning is all about predicting the future";

console.log(txt.charAt(25)); //returns character at that index

console.log(txt.endsWith("future")); //returns true if the given string ends with the specified text

console.log(txt.substring(8,17)); //returns the part of the string from start index to endIndex-1.

let str2 = txt.slice(8,17);
console.log(str2);
console.log(txt.slice(-12, -2)); //returns the part of the string from start index to endIndex-1. Also excepts negative indexes

console.log(txt.substr(8));
console.log(txt.substr(8,32)); ////returns the part of the string from start index till the length mentioned as second parameter

console.log(txt.substr(-6)); //also accets negative start Index

console.log(txt.replace(" ","_")); //replaces first occurance of para1 by para2

console.log(txt.toLowerCase()); // converts str to lower case
console.log(txt.toUpperCase()); // converts str to Upper case

//Arrays:

let fruits = ["mango", "banana", "apple"];
let a = ["pear"];
console.log(fruits);

console.log(fruits.concat(a)); // joins to arrays

console.log(fruits.reverse());  // reverses the array and stores in the same variable

console.log(fruits.pop());  //removes and print the last element in the array

console.log(fruits.push("kiwi")); //adds an element at the end of the array
console.log(fruits);

console.log(fruits.shift()); //removes first element of array
console.log(fruits);

console.log(fruits.unshift("lichi")); //adds element at beginning of the array
console.log(fruits);

console.log(fruits.sort());   //sort the array and stores it in the same variable

console.log(fruits.toString());  //convert to string



