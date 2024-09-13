//   Free Drinks - Burger Mor Than 500Tk: Free Choke - LC Choke: 30Tk *

let burger = 500;

if (burger < 550) {
  console.log('free Drinks');
} else {
  console.log('choke:30Tk');
}

/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

function calculateBMI(weight, height) {
  // Calculate BMI using the formula
  let bmi = weight / (height * height);

  // Determine health category based on BMI value
  let category;

  if (bmi < 18.5) {
    category = 'Underweight';
  } else if (bmi >= 18.5) {
    if (bmi <= 24.9) {
      category = 'Normal weight';
    } else if (bmi <= 29.9) {
      category = 'Overweight';
    } else {
      category = 'Obese';
    }
  }

  // Return the BMI value and the health category
  return `Your BMI is ${bmi.toFixed(2)} and you are ${category}.`;
}

// Example usage
console.log(calculateBMI(70, 1.75)); // BMI: 22.86 (Normal weight)
console.log(calculateBMI(90, 1.75)); // BMI: 29.39 (Overweight)
console.log(calculateBMI(50, 1.75)); // BMI: 16.33 (Underweight)

function checkDigitsInName(name) {
  if (typeof name !== 'string') {
    return 'Invalid Input';
  }

  for (let item of name) {
    if (!isNaN(item) && item !== ' ') {
      return true;
    }
  }
  return false;
}
console.log(checkDigitsInName('drjhf3j'));

/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

function grade(marks) {
  if (marks >= 90) {
    return 'golden A+';
  } else if (marks >= 80 && marks <= 89) {
    return 'A+';
  } else if (marks >= 70 && marks <= 79) {
    return 'A';
  } else if (marks >= 60 && 69) {
    return 'A-';
  } else (marks >= 59 && 0){
return false;
  }
  
}

const result = grade(34);
console.log(result);
