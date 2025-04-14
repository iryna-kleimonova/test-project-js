/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;

/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

const names = "Jacob,William,Solomon,Artemis";
const phones = "89001234567,89001112233,890055566377,890055566300";

/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

const string = "Welcome to the future";

/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

const values = [2, 17, 94, 1, 23, 37];
let min;
console.log(min); // 1



//!======================================================

function getFactorial(num) {
    if (num === 1) {
      return 1;
    }
    return num * getFactorial(num - 1);
  }
  
  //!======================================================
  // function fibba(x) {
  //   if (x <= 1) {
  //     return 1;
  //   }
  //   return fibba(x - 1) + fibba(x - 2);
  // }
  
  // console.log(fibba(5));
  
  //!======================================================
  /**
   * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
   * який для кожного елемента масиву буде виводити в консоль повідомлення у
   * форматі <номер елемента> - <значення елемента>. Нумерація елементів
   * повинна починатися з 1.
   *
   * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
   * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
   */
  //!======================================================
  
  // function logItems(items) {
  //   for (let i = 0; i < items.length; i++) {
  //     console.log(`${i + 1} - ${items[i]}`);
  //   }
  // }
  
  // logItems(['Mango', 'Poly', 'Ajax']);
  // logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
  
  //!======================================================
  
  /**
   * Напиши функцію printInfo(names, phones) яка виводить
   * у консоль ім'я та телефонний номер користувача. У параметри
   * names та phones будуть передані рядки імен та телефонних номерів,
   * розділені комами. Порядковий номер імен та телефонів у рядках
   * вказують на відповідність. Кількість імен та телефонів
   * гарантовано однакова.
   */
  
  // function printInfo(names, phones) {
  //   const namesList = names.split(',');
  //   const phonesList = phones.split(',');
  
  //   for (let i = 0; i < 4; i++) {
  //     const name = namesList[i];
  //     const phone = phonesList[i];
  
  //     console.log(`${name} - ${phone}`);
  //   }
  // }
  
  // printInfo(
  //   'Jacob,William,Solomon,Artemis',
  //   '89001234567,89001112233,890055566377,890055566300',
  // );
  
  /**
   * Напиши функцію formatTime(minutes) яка переведе значення
   * minutes (кількість хвилин) у рядок у форматі годин
   * та хвилин HH:MM.
   */
  
  // const hours = Math.floor(totalMinutes / 60);
  // const minutes = totalMinutes % 60;
  // console.log(hours);
  // console.log(minutes);
  
  // const doubleDigitHours = String(hours).padStart(2, 0);
  // const doubleDigitMinutes = String(minutes).padStart(2, 0);
  // console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);
  
  // function formatTime(minutes) {}
  
  // console.log(formatTime(70)); // "01:10"
  // console.log(formatTime(450)); // "07:30"
  // console.log(formatTime(1441)); // "24:01"