console.log('***** AFTER HERE ARE THE QUESTIONS JS');
console.log(
  `******************************************** \n ***     Answer Q -1                    ***  \n********************************************`
);

var age = 50;
var ageIn5Years = age + 5;
console.log(ageIn5Years);
// Write a while loop that prints to the console all the numbers from 10 to 1
// in descending order. Use the code below in your solution.

console.log(
  `******************************************** \n ***     Answer Q -2                    ***  \n********************************************`
);

// Q -2
var num = 10;
while (num <= 10 && num > 0) {
  console.log('Num es:', num);
  num--;
}

console.log(
  `******************************************** \n ***     Answer Q -3                    ***  \n********************************************`
);


// Q -3
// Write a for loop that prints to the console all the numbers from 1 to 10 in
// ascending order.
for (i = 1; i <= 10; i++) {
  console.log('i es', i);
}

// Off the coast of Miami Beach, a group of oceanologists have
// begun a project that will grow the population of goldfish. By the end of each
// month, the population will be 4 times larger! To stay on top of this
// explosive growth, the scientists would like a printout of how many
// goldfish will make a new home in Miami Beach water.
//
// Copy the variables below and use them to build a while loop that prints
// a message for one year’s worth of time.

console.log(
  `******************************************** \n ***     Answer Q -4                    ***  \n********************************************`
);

var numGoldfish = 4;
var monthNumber = 1;
var monthsToPrint = 12;

while (monthNumber <= monthsToPrint) {
  numGoldfish *= 4;
  console.log(`There will be ${(numGoldfish)} after ${monthNumber} month(s)!`);
  monthNumber++;
}

// Here’s what the first two lines of output should look like:
//
//    There will be 16 goldfish after 1 month(s)!
//    There will be 64 goldfish after 2 month(s)!
//
// Note: you must the the above 3 variables in your solution.

// Q-4


// Q-5
// The Dinger Dam has 19 generators of two different types. Generators 1-4
// output 62 megawatts (MW) and generators 5-19 output 124 MW.
//
// The Dam Rangers have asked you to create a printout shows the power output
// of each generator and the total power being generated after each generators
// is turned on. The first two console logs should look like the following:
//
//    Generator #1 is on, adding 62 MW, for a total of 62 MW!
//    Generator #2 is on, adding 62 MW, for a total of 124 MW!
//
// The 5th and 6th console log should like like the following:
//
//    Generator #5 is on, adding 124 MW, for a total of 372 MW!
//    Generator #6 is on, adding 124 MW, for a total of 496 MW!
//
// Use the variables below in your solution.


console.log(
  `******************************************** \n ***     Answer Q -5                    ***  \n********************************************`
);

var currentGen = 1;
var totalGen = 19;
var totalMW = 0;

for (currentGen; currentGen <= totalGen; currentGen++) {
  if (currentGen === 1 || currentGen === 2 || currentGen === 3 || currentGen === 4) {
    totalMW = totalMW + 62;
    console.log(`Generator # ${currentGen} is on, adding 62 MW, for a total of ${totalMW} MW!`);
  } else {
    totalMW = totalMW + 124;
    console.log(`Generator # ${currentGen} is on, adding 124 MW, for a total of ${totalMW} MW!`);
  }

}

console.log(
  `******************************************** \n ***     Answer Q -6                    ***  \n********************************************`
);
// Create a variable called condition and set it to: 3 > 4
//
// Then, create an if/else statement. Put the condition variable in the condition
// of the if/else statement.
//
// Inside the if code block, log to the console "The condition is true".
// Inside the else code block, log to the console "The condition is false."

var condition = 3 > 4;
if (condition) {
  console.log('The condition is true');
} else {
  console.log('The condition is false');
}

console.log(
  `******************************************** \n ***     Answer Q -7                    ***  \n********************************************`
);
// Create a for loop that prints all the even numbers from 1 to 20 to the console.
// Use an if statement and the modulo operator in your solution.
for (var i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log(
  `******************************************** \n ***     Answer Q -8                    ***  \n********************************************`
);

// Declare a function (don't use the assignment operator) called sum.
// Give your sum function two parameters called a and b.
// Inside the body of the sum function, return the sum of a and b.
//
// Then make 3 console logs calling (running) your sum function inside of them.
// Then first console log should print the number 8.
// Then first console log should print the number 13.
// Then first console log should print the number -3.

function sum(a, b) {
  return a + b;
}
console.log(sum(3, 5));
console.log(sum(10, 3));
console.log(sum(-8, 5));


console.log(
  `******************************************** \n ***     Answer Q -9                    ***  \n********************************************`
);

// Build a function declaration called maxOf2 that takes in two numbers and
// returns the greater value.
//
// IMPORTANT: Make sure your function returns "equal" if the two numbers are equal.
// You might want to use an if/elseif/else statement for this.
//
// Then make 3 console logs calling your maxOf2 function inside each one.
// The first console log should print 5.
// The second console log should print "equal".
// The third console log should print -3.

function maxOf2(num1, num2) {
  if (num1 == num2) {
    return 'equal';
  } else if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log(maxOf2(5, 3));
console.log(maxOf2(5, 5));
console.log(maxOf2(-6, -3));

console.log(
  `******************************************** \n ***     Answer Q -10                    ***  \n********************************************`
);

// Create a new function called "efficient" below the "msytery" function that returns
// the same value as the mystery function. However, the efficient function
// should have only one line of code inside its body instead of 4 lines of code,
// like the mystery function has.

function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  console.log('value return by mystery function', c);
  return c;
}

function efficient(a, b) {
  var x = 4 * a + b;
  var y = 3 * b + 5;
  var z = x + y
  return z;
}
/*
        const newEfficient = (a, b) => {
            var x = 4 * a * b;
            var y = 3 * b + 5;
            var z = x + y;
        }

        */
console.log('Nuevo', efficient(3, 2));

console.log('value return by efficient function', efficient(3, 2));