import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />,document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

// const newNumbers= numbers.map((x)=>{
//   return x*x;
// });

// console.log(newNumbers);

//**************************************map*****************************************/

//Map -Create a new array by doing something with each item in an array.

// function double(x){
//   return x*2;
// }
// const newNumbers=numbers.map(double);
// console.log(newNumbers);

// const newNumbers=numbers.map(function(x){
//   return x*2;
// });
// console.log(newNumbers);

// const newNumber = numbers.map(x=>x*2);

//**************************************forEach*****************************************/

//forEach

// var newNumbers=[];
// function double(x)
// {
//   newNumbers.push(x*2);
// } 
// numbers.forEach(double);
// console.log(newNumbers);

// var newNum=[];
// numbers.forEach(function(x){
//   newNum.push(x*2);
// });
// console.log(newNum);

//**************************************filter*****************************************/

//Filter - Create a new array by keeping the items that return true.

// const newNumbers=numbers.filter(function(num){
//   return num>10
// });
// console.log(newNumbers);

// const newNumbers=numbers.filter((num)=>
//      num>10
// );

//**************************************reduce*****************************************/

//Reduce - Accumulate a value by doing something to each item in an array.

// var newNumber =numbers.reduce(function (accumulator, currentNumber){
//   return accumulator + currentNumber;
// });

// console.log(newNumber);

// var newNumber =numbers.reduce((accumulator, currentNumber)=>
//      accumulator + currentNumber
//   );

//**************************************Find*****************************************/

//Find - find the first item that matches from an array.
// var numbers = [3, 56, 2, 48, 5];

// const newNumber=numbers.find(function(num){
//   return num>10;
// });
// console.log(newNumber);
// const newNumber=numbers.find(num=>
//      num>10
//   );


//**************************************FindIndex*****************************************/

//FindIndex - find the index of the first item that matches.
// var numbers = [3, 56, 2, 48, 5];

// const newNumber=numbers.findIndex(function(num){
//   return num>10;
// });
// console.log(newNumber);

// const newNumber=numbers.findIndex(num=>
//      num>10
//   );

// import emojipedia from "./emojipedia";

// const newEmojipedia=emojipedia.map(function(emojiEntry){
//  return emojiEntry.meaning.substring(0,100)
// })
// console.log(newEmojipedia);