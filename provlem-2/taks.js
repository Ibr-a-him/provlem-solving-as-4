/**
 * Solve the problem with Javascript  to find the maximum between two numbers. (Hint: take 2 variables and find the maximum number between them)
 */

let number = 10;
let number1 = 20;

let maxnumber = Math.max(number, number1);
console.log('The maximum numbers is:', maxnumber);

/*
Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

*/
let numbers = 5;

if (numbers > 0) {
  console.log('The number is positive');
} else if (numbers < 0) {
  console.log('The number is negative');
} else {
  console.log('The number is zero');
}

/*
Solve the problem with Javascript  to check whether a number is negative, positive or zero. (take a single variable and check using if else condition)

*/

let chack = -10;

if (chack > 0) {
  console.log('positive ');
} else if (chack < -7) {
  console.log('number is negative');
} else {
  console.log('number is zero');
}

/*
Solve the problem with Javascript  to check whether a number is divisible by 10 or not. (take single variable and check using if esle condition)
*/

let num = 30;

if (num % 3 === 0) {
  console.log('The number is divisible by 10');
} else {
  console.log('The number is not divisible by 10');
}

/*
Solve the problem with Javascript  to check whether a number is even or odd. 
*/

let odd = 13;

for (i = 0; i < odd; i++) {
  if (i % 2 !== 0) {
    console.log('The number is even');
  } else {
    console.log('The number is odd');
  }
}

if (number % 2 === 0) {
  console.log('The number is even');
} else {
  console.log('The number is odd');
}

/*
Solve the problem with Javascript  to check whether the temperature is hot, cold or normal. (30 <=  is hot, 25 >= is cold , anyother value is normal)
*/

let temperature = 10;

if (temperature >= 30) {
  console.log('temperature is a hot today');
} else if (temperature <= 20) {
  console.log('The temperature is cold today');
} else {
  console.log('The temperature is normal today');
}

/*
Solve the problem with Javascript  to find a maximum between three numbers. (Hint: take 3 variables and find the maximum number between them use logical and operator for that)
*/

let num1 = 10;
let num2 = 25;
let num3 = 5;

if (num1 >= num2 && num1 >= num3) {
  console.log('The maximum number is:', num1);
} else if (num2 >= num1 && num2 >= num3) {
  console.log('The maximum number is:', num2);
} else {
  console.log('The maximum number is:', num3);
}

/*
Write a JavaScript expression using the ternary operator that checks if a number x is even or odd. Store the result in a variable and print “Even Number” or “Odd Number”.

*/
let x = 12;

let result = x % 2 === 0 ? 'Even Number' : 'Odd Number';
console.log(result);

/*
Use the logical AND operator to determine if two variables, numOne and numTwo, are both greater than 30. Print a message to the console reflecting the result.
*/

let numOne = 35;
let numTwo = 40;

if (numOne > 30 && numTwo > 30) {
  console.log('Both numbers are greater than 30');
} else {
  console.log('One or both numbers are not greater than 30');
}


/*
Write a JavaScript program that uses if-else statements combined with logical operators. The program should check if a person’s age is between 13 and 19. If so, print “Teenager”. Otherwise, print “Not a teenager”. (Hint: Combining If-Else and Logical Operators)


*/

let age = 15;


if (age >= 13 && age <= 19) {
  console.log('“Teenager”');
} else {
  console.log('“Not a teenager”');
}