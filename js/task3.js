/*
 * Перепишіть конструкцію if за допомогою тернарного оператора
 */

// ✅ Де це доцільно

// let result;

// const a = 1;
// const b = 2;

// result = a + b < 4 ? 'мало' : 'багато';

// console.log(result);

// if (a + b < 4) {
//   console.log('мало');
// } else {
//   console.log('багато');
// }

// ❌ Де це недоцільно
// if (login === 'Сотрудник') {
//   message = 'Привет';
// } else if (login === 'Директор') {
//   message = 'Здравствуйте';
// } else if (login === '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }

// let login = '';

// let message =
//   login === 'Сотрудник'
//     ? 'Привет'
//     : login === 'Директор'
//     ? 'Здравствуйте'
//     : login === ''
//     ? 'Нет логина'
//     : '';

// console.log(message);
