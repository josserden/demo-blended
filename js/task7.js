/*
 * Наше завдання - визначити характер зазначеного речення
 */

function getSenescenceType(string) {
  if (string.endsWith('!')) {
    return console.log('Це окличне речення ');
  }

  if (string.endsWith('?')) {
    return console.log('Це питальне речення ');
  }

  return console.log('Це розповідне речення ');
}

getSenescenceType('Я бачив у місті такого ж представника, як ти!');
getSenescenceType('Чи бачив ти у місті такого ж представника, як я?');
getSenescenceType('Вибач, але я не в курсі хто ти такий...');
