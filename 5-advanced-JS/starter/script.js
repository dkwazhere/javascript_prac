// Function contructor
/*
var Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  console.log(2018 - this.yearOfBirth);
};

Person.prototype.lastName = "Smith";

var john = new Person("John", 1990, "teacher");
var jane = new Person("Jane", 1969, "designer");
var mark = new Person("Mark", 1949, "Fire Fighter");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

// Object.create
/*
var personProto = {
  calculateAge: function() {
    console.log(2018 - this.yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = "John";
john.yearOfBirth = 1990;
john.job = "teacher";

var jane = Object.create(personProto, {
  name: { value: "Jane" },
  yearOfBirth: { value: 1940 },
  job: { value: "designer" }
});
*/
// Primitives vs objects
/*
// Primitives
var a = 23;
var b = a;
a = 46;
console.log(a);
console.log(b);

// Objects
var obj1 = {
  name: "John",
  age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

// Functions
var age = 27;
var obj = {
  name: "Jonas",
  city: "Lisbon"
};

function change(a, b) {
  a = 30;
  b.city = "San Francisco";
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

// Passing functions as arguments.
/*
var years = [1999, 1965, 1937, 2001, 1991];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);
*/

// Functions returning functions
/*
function interviewQuestions(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach? " + name);
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}

var teacherQuestion = interviewQuestions("teacher");
var designerQuestion = interviewQuestions("designer");

teacherQuestion("John");
designerQuestion("DK");
designerQuestion("Jane");
designerQuestion("Mark");
designerQuestion("Mike");
designerQuestion("Dong");

interviewQuestions("teacher")("Mikey");

function questions(job) {
  if (job === "coder") {
    return function(name) {
      console.log(name + ", Which language do you use?");
    };
  } else if (job === "designer") {
    return function(name) {
      console.log(name + ", Do you like photoshop?");
    };
  } else {
    return function(name) {
      console.log(name + ", What do you do my friend?");
    };
  }
}

questions("coder")("Dk");
questions("designer")("Stephanie");
questions("no job")("David");

var coderQuestions = questions("coder");
var designerQuestions = questions("designer");
var noQuestions = questions("Something");

coderQuestions("Steep");
designerQuestions("Llama");
noQuestions("Steve jobs");
*/

// IIFE
/*
function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
  console.log(score);
}
game();


(function() {
  var score = Math.floor(Math.random() * 10);
  console.log(score >= 5);
  console.log(score);
})();

(function(goodLuck) {
  var score = Math.floor(Math.random() * 10);
  console.log(score >= 5 - goodLuck);
  console.log(score);
})(5);

*/

// Closures
/*
function retirement(retirementAge) {
  var a = " years left until retirement";
  return function(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementKOR = retirement(70);
var retirementGER = retirement(65);
retirementUS(1990);
retirement(66)(1992);
retirementKOR(1991);
retirementGER(1991);
*/

// Closures: inner function has always access to the variables and parameters of its outer function, even affter the outer function has returned.
/*

// Converting interviewQuestions function to closure function
function interviewQuestions(job) {
  if (job === "designer") {
    return function(name) {
      console.log(name + ", can you please explain what UX design is?");
    };
  } else if (job === "teacher") {
    return function(name) {
      console.log("What subject do you teach? " + name);
    };
  } else {
    return function(name) {
      console.log("Hello " + name + ", what do you do?");
    };
  }
}
*/
/*
function interviewQuestions(job) {
  return function(name) {
    if (job === "designer") {
      console.log(name + ", can you please explain what UX design is?");
    } else if (job === "teacher") {
      console.log("What subject do you teach? " + name);
    } else {
      console.log("Hello " + name + ", what do you do?");
    }
  };
}

interviewQuestions("teacher")("John");
interviewQuestions("designer")("David");
interviewQuestions("coder")("david");
*/

// Bind, Call, and Apply.
/*
var john = {
  name: "John",
  age: 27,
  job: "teacher",
  presentation: function(style, timeOfDay) {
    if (style === "formal") {
      console.log(
        "Good " +
          timeOfDay +
          ", ladies and gentlement! I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old."
      );
    } else if (style === "friendly") {
      console.log(
        "Hey! what's up " +
          " I'm " +
          this.name +
          ", I'm a " +
          this.job +
          " and I'm " +
          this.age +
          " years old. Have a nice " +
          timeOfDay +
          "."
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "designer"
};

var dk = {
  name: "David",
  age: 27,
  job: "unemployed"
};

john.presentation("formal", "morning");

// Method borrowing
// we borrow john's method to emily's using the 'call' method
john.presentation.call(emily, "friendly", "afternoon");
john.presentation.call(dk, "formal", "morning");

//john.presentation.apply(emily, ["friendly", "evening"]);

var johnFriendly = john.presentation.bind(dk, "friendly");

johnFriendly("morning");
johnFriendly("night");

var emilyFormal = john.presentation.bind(emily, "formal");
emilyFormal("afternoon");
*/
/*
var years = [1999, 1965, 1937, 2001, 1991];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2018 - el;
}

function isFullAge(limit, el) {
  return el >= limit;
}

var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/
