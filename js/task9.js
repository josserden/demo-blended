/*
 * Паліндром - слово, речення чи послідовність символів, яка абсолютно однаково читається як у звичному напрямку, так і у зворотному. Наприклад, "Anna" - це паліндром, а "table" і "John" - ні.
 * Даний рядок; потрібно написати функцію, яка дозволяє повернути значення true, якщо рядок є паліндром, і false - якщо ні. При цьому потрібно враховувати прогалини та розділові знаки.
 */

function palindrome(string) {
  const normalizeString = string.toLowerCase().trim();

  return normalizeString === normalizeString.split('').reverse().join('');
}

console.log(palindrome('     Anna '));
console.log(palindrome('John'));
