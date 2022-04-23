/*
 * Є масив із числами. Створіть із нього новий масив, де залишаться лежати лише позитивні числа. Створіть для цього допоміжну функцію isPositive(), яка параметром прийматиме число і повертатиме true, якщо число позитивне, і false - якщо негативне.
 */

const array = [1, 2, 3, -1, -2, -3];
const newArray = [];

function isPositive(number) {
  // if (number > 0) {
  //   return true;
  // }

  // return false;

  return number > 0 ? true : false;
}

for (const num of array) {
  if (isPositive(num)) {
    newArray.push(num);
  }
}

console.log(newArray);
