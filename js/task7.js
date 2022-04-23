/*
 * Як знайти суму елементів масиву, якщо вкладеність масиву невідома?
 */

function arraySum(array) {
  const newArray = [];
  let total = 0;

  for (const item of array) {
    if (Array.isArray(item)) {
      total += arraySum(item);

      newArray.push(item);
    } else {
      total += item;
    }
  }

  return total;
}

console.log(arraySum([[1, 2, [3, 4]], [9], [10, 12]]));
