/*
 * Потрібно написати функцію яка приймає рядок і перевіряє є чи рядок абеткою
 */

// function isAlphabet(string) {
//   const convertedString = string.toLowerCase().trim();

//   if (convertedString.length === 0) {
//     return false;
//   }

//   let firstChar = convertedString[0].charCodeAt();

//   for (let i = 1; i < convertedString.length; i += 1) {
//     let nextChar = convertedString[i].charCodeAt();
//     if (nextChar - firstChar !== 1) {
//       return false;
//     }

//     firstChar = nextChar;
//   }

//   return true;
// }

// console.log(isAlphabet('abc')); // true
// console.log(isAlphabet('abd')); // false
// console.log(isAlphabet(' ')); // false
// console.log(isAlphabet('xyz{'));
