// Ternary operator and switch statements
// var firstName = "David";
// var age = 22;

// Ternary operator
// age >= 21
//   ? console.log(firstName + " is drinking beer")
//   : console.log(firstName + " is drinking juice");
// var drink = age >= 21 ? "beer" : "juice";
// console.log(drink);

// The below is the same code as the above ternary
// if (age >= 21) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// }

// Switch Statement
// var job = "instructor";

// switch (job) {
//   case "teacher":
//   case "instructor":
//     console.log(firstName + " teaches kids how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " drives an uber in torrance,ca");
//     break;
//   case "designer":
//     console.log(firstName + " designs beautiful websites");
//     break;
//   default:
//     console.log(firstName + " does something else");
// }

// Convert if/else statement to switch

// var lastName = "John";
// var personAge = 20;

// if (age < 13) {
//   console.log(firstName + " is a boy.");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager.");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a young man.");
// } else {
//   console.log(firstName + " is a man.");
// }

// var lastName = "John";
// var personAge = 13;

// switch (true) {
//   case personAge < 13:
//     console.log(firstName + " is a boy.");
//     break;
//   case personAge >= 13 && personAge < 20:
//     console.log(firstName + " is a teen");
//     break;
//   case personAge >= 20 && personAge < 30:
//     console.log(firstName + " is a young man");
//     break;
//   default:
//     console.log(firstName + " is a man");
// }

/*****************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

// var height;
// height = 23;

// if (height || height === 0) {
//   console.log("variable is defined");
// } else {
//   console.log("variable has not been defined");
// }

// // Equality operators (== vs ===)

// if (height == "23") {
//   console.log("The == operator does type coercian");
// }

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// var john = Math.round((89 + 120 + 103) / 3);
// var mike = Math.round((119 + 98 + 123) / 3);
// var mary = Math.round((99 + 134 + 105) / 3);
// console.log("john's score: " + john);
// console.log("mike's score: " + mike);
// console.log("mary's score: " + mary);

// if (john > mike && john > mary) {
//   console.log("john wins");
// } else if (mike > john && mike > mary) {
//   console.log("mike wins");
// } else if (mary > mike && mary > john) {
//   console.log("mary wins");
// } else {
//   console.log("there is a draw");
// }

/*****************************
 * Functions
 */

// calculateAge = birthYear => {
//   return 2018 - birthYear;
// };

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1948);
// var ageJane = calculateAge(1969);
// console.log(ageJohn, ageMike, ageJane);

// yearsUntilRetirement = (year, firstName) => {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(firstName + " retires in " + retirement + " years.");
//   } else {
//     console.log(firstName + " is already retired");
//   }
// };

// yearsUntilRetirement(1991, "David");
// yearsUntilRetirement(1996, "Jane");
// yearsUntilRetirement(1961, "Ching");
// yearsUntilRetirement(1941, "Mike");

// rety on own...
// calculateAge = birthYear => {
//   return 2018 - birthYear;
// };

// var david = calculateAge(1991);
// console.log(david);

// calculateRetirement = (year, firstName) => {
//   var age = calculateAge(year);
//   var retirement = 65 - age;
//   if (retirement > 0) {
//     console.log(firstName + " has " + retirement + " years left to retire");
//   } else {
//     console.log(firstName + " is already retired!");
//   }
// };

// calculateRetirement(1991, "dk");
// calculateRetirement(1491, "jimbo");
// calculateRetirement(1953, "hello");
// calculateRetirement(1954, "hello");

/*****************************
 * Function Statements and Expressions
 */
// function declaration
// function whatDoYouDo(job, firstName) {}

// function expression
// var whatDoYouDo = function(job, firstName) {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code";
//     case "driver":
//       return firstName + " drives for uber";
//     case "designer":
//       return firstName + " is a awesome designer";
//     default:
//       return firstName + " does something else";
//   }
// };

// console.log(whatDoYouDo("teacher", "david"));
// console.log(whatDoYouDo("driver", "david"));
// console.log(whatDoYouDo("designer", "david"));
// console.log(whatDoYouDo("retired", "david"));

/*****************************
 * Arrays
 */

// var names = ["john", "mark", "jane"];
// var years = new Array(1990, 1969, 1948);

// console.log(names.length);

// names[1] = "ben";
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// names[names.length] = "jee";
// console.log(names);
// var john = ["john", "smith", 1993, false, "designer"];
// john.push("blue");
// john.unshift("mr"); // this will push it in the front
// john.pop(); // pop will remove the last element of the array
// john.pop();
// john.shift(); // shift will remove the front of the array
// var isDesigner =
//   john.indexOf("designer") === -1
//     ? "John is not a designer"
//     : "John is a designer";

// console.log(isDesigner);
// console.log(john.indexOf(1993)); // indexOf will return the position of the element in the array

// console.log(john);

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// calculateTip = bill => {
//   let percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill < 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// };

// console.log(calculateTip(20));

// var bill = [124, 48, 268];
// var tips = [calculateTip(bill[0]), calculateTip(bill[1]), calculateTip([2])];
// var finalValues = [bill[0] + tips[0], bill[1] + tips[1], bill[2] + tips[2]];

// console.log(tips);
// console.log(finalValues);

// RETRY

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// calculateTip = bill => {
//   let percentage;
//   if (bill < 50) {
//     percentage = 0.2;
//   } else if (bill >= 50 && bill <= 200) {
//     percentage = 0.15;
//   } else {
//     percentage = 0.1;
//   }
//   return percentage * bill;
// };

// // console.log(calculateTip(10));

// var bills = [124, 48, 268];
// var tips = [
//   calculateTip(bills[0]),
//   calculateTip(bills[1]),
//   calculateTip(bills[2])
// ];

// var final = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(tips);
// console.log(final);

/*****************************
 * Objects and properties
 */

// Object literal
// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1990,
//   family: ["Jennifer", "Jane", "Mark", "Bob"],
//   job: "teacher",
//   isMarried: false
// };

// console.log(john);
// console.log(john.firstName);
// console.log(john.lastName);
// console.log(john["birthYear"]);
// console.log(john["family"]);
// console.log(john.job);
// var x = john.isMarried;
// console.log(x);
// john.job = "designer";
// john["isMarried"] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.firstName = "Jane";
// jane.birthYear = 1991;
// jane["lastName"] = "Smitthers";
// console.log(jane);

/*****************************
 * Objects and methods
 */

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: 1991,
//   family: ["Jennifer", "Jane", "Mark", "Bob"],
//   job: "teacher",
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2018 - this.birthYear;
//   }
// };

// john.calcAge();
// console.log(john);

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀

*/

// var mark = {
//   firstName: "Mark",
//   lastName: "Smith",
//   mass: 100,
//   height: 2.2,
//   calcBmi: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// var john = {
//   firstName: "John",
//   lastName: "Topanga",
//   mass: 100,
//   height: 2.2,
//   calcBmi: function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   }
// };

// console.log(john, mark);

// if (mark.calcBmi() > john.calcBmi()) {
//   console.log(
//     mark.firstName +
//       " " +
//       mark.lastName +
//       " Has a higher Bmi than " +
//       john.firstName +
//       " " +
//       john.lastName +
//       " by " +
//       (mark.calcBmi() - john.calcBmi())
//   );
// } else if (john.calcBmi() > mark.calcBmi()) {
//   console.log(
//     john.firstName +
//       " " +
//       john.lastName +
//       " Has a higher bmi than " +
//       " " +
//       mark.firstName +
//       " " +
//       mark.lastName +
//       " by " +
//       (john.calcBmi() - mark.calcBmi())
//   );
// } else {
//   console.log(
//     john.firstName +
//       " " +
//       john.lastName +
//       " has the same bmi as " +
//       mark.firstName +
//       " " +
//       john.lastName
//   );
// }

/*****************************
 * Loops and iteration
 */

// for (var i = 1; i <= 21; i += 2) {
//   console.log(i);
// }

// var john = ["john", "smith", 1990, "designer", false];
// For loop
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// While loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// continue and the break statements
// break
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }
// continue
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") continue;
//   console.log(john[i]);
// }

// looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//   console.log(john[i]);
// }

/*****************************
 * CODING CHALLENGE 5
 */

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// var john = {
//   fullName: "John Smith",
//   bills: [124, 48, 268, 180, 42],
//   calcTips: function() {
//     this.tips = [];
//     this.finalValues = [];

//     for (var i = 0; i < this.bills.length; i++) {
//       // Determine percentage based on tipping rules.
//       var percentage;
//       var bill = this.bills[i];
//       if (bill > 50) {
//         percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }

//       // Add results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.finalValues[i] = bill + bill * percentage;
//     }
//   }
// };
// john.calcTips();

/*
EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average
*/

// var mark = {
//   fullName: "Mark Smith",
//   bills: [77, 375, 110, 45],
//   calcTips: function() {
//     this.tips = [];
//     this.finalValues = [];

//     for (var i = 0; i < this.bills.length; i++) {
//       // Determine percentage based on tipping rules.
//       var percentage;
//       var bill = this.bills[i];
//       if (bill > 100) {
//         percentage = 0.2;
//       } else if (bill >= 100 && bill < 300) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.25;
//       }

//       // Add results to the corresponding arrays
//       this.tips[i] = bill * percentage;
//       this.finalValues[i] = bill + bill * percentage;
//     }
//   }
// };

// function calcAverage(tips) {
//   var sum = 0;
//   for (var i = 0; i < tips.length; i++) {
//     sum = sum + tips[i];
//   }
//   return sum / tips.length;
// }

// [ 2,6,4] => 0/ 2/ 8/ 12

// Do the calculations
// mark.calcTips();
// console.log(mark, john);

// john.average = calcAverage(john.tips);
// mark.average = calcAverage(mark.tips);

// if (john.average > mark.average) {
//   console.log(
//     john.fullName +
//       "'s family pays higher tips with an average of $" +
//       john.average
//   );
// } else {
//   console.log(
//     mark.fullName +
//       "'s family pays higher tips with an average of $" +
//       mark.average
//   );
// }

// retry

// var john = {
//   firstName: "John Doe",
//   bill: [124, 48, 268, 180, 42],
//   calcTip: function() {
//     this.tip = [];
//     this.finalBill = [];
//     for (var i = 0; i < this.bill.length; i++) {
//       let percentage;
//       var bill = this.bill[i];
//       if (bill < 50) {
//         percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }
//       this.tip[i] = bill * percentage;
//       this.finalBill[i] = bill + bill * percentage;
//     }
//   }
// };

// john.calcTip();
// console.log(john);

// retry again.

// var john = {
//   firstName: "David Kim",
//   bill: [124, 48, 268, 180, 42],
//   calcTips: function() {
//     this.tip = [];
//     this.finalAmount = [];
//     for (var i = 0; i < this.bill.length; i++) {
//       let percentage;
//       var bill = this.bill[i];
//       if (bill < 50) {
//         percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }
//       this.tip[i] = bill * percentage;
//       this.finalAmount[i] = bill + bill * percentage;
//     }
//   }
// };

// john.calcTips();
// console.log(john);

// var mark = {
//   name: "Mark Doe",
//   bill: [124, 99, 200, 424, 11],
//   calcTips: function() {
//     this.tip = [];
//     this.finalAmount = [];
//     for (var i = 0; i < this.bill.length; i++) {
//       let percentage;
//       var bill = this.bill[i];
//       if (bill < 50) {
//         percentage = 0.2;
//       } else if (bill >= 50 && bill < 200) {
//         percentage = 0.15;
//       } else {
//         percentage = 0.1;
//       }
//       this.tip[i] = bill * percentage;
//       this.finalAmount[i] = bill + bill * percentage;
//     }
//   }
// };

// mark.calcTips();
// console.log(mark);
