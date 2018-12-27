///////////////////////////////////////
// Lecture: Hoisting
// functions
// calculateAge(1991);

// function declaration
// function calculateAge(year) {
//   console.log(2018 - year);
// }

// function expression
// var retirement = function(year) {
//   console.log(65 - (2016 - year));
// };
// retirement(1991);

// hoisting only works with function declaration

// variables
/*
console.log(age);
var age = 23;

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo();
console.log(age);
*/

///////////////////////////////////////
// Lecture: Scoping

// First scoping example
/*
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    console.log(a + b + c);
  }
}
*/

// Example to show the differece between execution stack and scope chain
/*
var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  console.log(a + b + c + d);
}
*/

///////////////////////////////////////
// Lecture: The this keyword
// console.log(this);
/*
calculateAge(1991);

function calculateAge(year) {
  console.log(2018 - year);
  console.log(this);
}
*/
/*
var john = {
  firstName: "john",
  yearOfBirth: 1990,
  calcAge: function(year) {
    console.log(2018 - year);
    // console.log(this);
    // console.log(this.yearOfBirth);
    // console.log(this.calcAge);
    // function innerFunction() {
    //   console.log(this);
    // }
    // innerFunction();
  }
};

john.calcAge(1991);

var mike = {
  name: "Mike",
  yearOfBirth: 1984
};

// Borrowing methods
mike.calcAge = john.calcAge;
mike.calcAge(1981);
*/
