/*
 * Скрипт приймає 1 сторону (side) і діагональ (diagonal) прямокутника. Перевір це прямокутник (діагональ не може бути менше сторони прямокутника). Поверни площу цього прямокутника або рядок not a rectangle, якщо це не прямокутник. Якщо результат не ціле число, округли значення до 2 знаків після коми.
 */

function getArea(side, diagonal) {
  if (side > diagonal) {
    return 'not a rectangle';
  }

  return Math.floor(Math.sqrt(diagonal ** 2 - side ** 2) * side);
}

console.log(getArea(2, 3));
console.log(getArea(20, 12));
console.log(getArea(15.77, 38.7));
