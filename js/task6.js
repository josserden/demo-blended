/*
 * Дано рядок, що складається із символів, наприклад, '  abcde '. Перевірте, що першим символом цього рядка є буква 'a'. Якщо це так - виведіть 'так', інакше - виведіть 'ні'.
 */

const string = '   abcde  ';
const result = string.trim().startsWith('a');

// if (string.trim().startsWith('a')) {
//   console.log('так');
// } else {
//   console.log('ні');
// }

console.log(result ? 'так' : 'ні');
