// 1
// Написати функцію findFirstOccurrence, яка приймає два аргументи: рядок str і підрядок substr.
//  Функція повинна повертати індекс першого входження підрядка в рядок.
//  Якщо підрядок не знайдено, функція повинна повертати - 1.

function findFirstOccurrence(str, substr) {
    if (str.includes(substr)) {
        return str.indexOf(substr);
    } else {
        return -1;
    }
}

function findFirstOccurrence(str, substr) {
    return str.indexOf(substr);
}

console.log(findFirstOccurrence('Hello, world!', 'world')) // 7
console.log(findFirstOccurrence('Hello, world!', 'JavaScript')) // -1
console.log(findFirstOccurrence('Hello, world!', 'Hello')) // 0


// 2
// Написати функцію getSubstring, яка приймає три аргументи: рядок str,
// індекс початку start та індекс кінця end.
// Функція повинна повертати підрядок, що починається з індексу start
// і закінчується індексом end(не включаючи його).

function getSubstring(str, start, end) {
  return str.slice(start, end);

}
console.log(getSubstring('Hello, world!', 7, 12)) // "world"
console.log(getSubstring('JavaScript', 4, 10)) // "Script"
console.log(getSubstring('Slice method', 0, 5)) // "Slice"

// 3
// Написати функцію extractAfterSubstring,
// яка приймає два аргументи: рядок str і підрядок substr.
// Функція повинна повертати частину рядка, що йде після першого входження підрядка.
// Якщо підрядок не знайдено, функція повинна повертати порожній рядок.


// function extractAfterSubstring(str, substr) {
//     if (str.includes(substr)) {
//         return str.slice(str.indexOf(substr), str.indexOf(substr) + substr.length);
//     } else {
//         return "";
//     }
// }

// function extractAfterSubstring(str, substr) {
//     idx = str.indexOf(substr);
//     if (idx !== -1) {
//         return str.slice(idx, idx + substr.length);
//     } else {
//         return "";
//     }
// }

// console.log(extractAfterSubstring('Hello, world!', 'world')) // "!"
// console.log(extractAfterSubstring('Hello, world!', 'JavaScript')) // ""
// console.log(extractAfterSubstring('Hello, world!', 'Hello')) // ", world!"
// console.log(extractAfterSubstring("I love you!", "love"));




// 4
// Написати функцію removeSubstring, яка приймає два аргументи:
// рядок str і підрядок substr.Функція повинна повертати новий рядок,
//   у якому перше входження підрядка буде видалено.Якщо підрядок не знайдено,
//     функція повинна повертати оригінальний рядок.


function removeSubstring(str, substr) {
  const index = str.indexOf(substr);
  if (index === -1) {
    return str; // підрядок не знайдено
  }
  return str.slice(0, index) + str.slice(index + substr.length);
}
console.log(removeSubstring('Hello, world!', 'world')) // "Hello, !"
console.log(removeSubstring('Hello, world!', 'JavaScript')) // "Hello, world!"
console.log(removeSubstring('Hello, world!', 'Hello')) // ", world!"




// 5
// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

function extractBetween(str, start, end) {
  const startIndex = str.indexOf(start);
  if (startIndex === -1) return "";

  const endIndex = str.indexOf(end, startIndex + start.length);
  if (endIndex === -1) return "";

  return str.slice(startIndex + start.length, endIndex);
}
console.log(extractBetween('Hello, [world]!', '[', ']')) // "world"
console.log(extractBetween('Hello, [world]!', '{', '}')) // ""
console.log(extractBetween('Hello, {world}!', '{', '}')) // "world"



// 6
// Написати функцію removeVowelsFromWords,
//   яка приймає рядок str і повертає новий рядок,
//     у якому з кожного слова видалені всі голосні букви.

const vowels = "aoieyuAOIEYU";

function removeVowelFromWords(str) {
    let newStr = "";

    for (let i = 0; i < str.length; i++){
     if (vowels.includes(str[i])) {
        continue;
    } else {
        newStr += str[i];
    }   
    }
        return newStr;
}

console.log(removeVowelFromWords("qwertyuiop[]][poiuytrewqwertyuiop["))
console.log(removeVowelFromWords('Hello, world!')) // "Hll, wrld!"
console.log(removeVowelFromWords('JavaScript is awesome!')) // "JvScrpt s wsm!"
console.log(removeVowelFromWords('Remove vowels from words')) // "Rmv vwls frm wrds"



// 7
//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

// function inputNumber() {
//     let num;
//     do {
//         num = prompt("Введіть число більше 100");
//         if (num === null) return "Відміна"; // натиснув "Скасувати"
//     } while (Number(num) <= 100 || isNaN(num));
//     return num;
// }

// let results = inputNumber();
// console.log(results);


// 8
// Написати функцію removeCharacter, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати новий рядок,
//   у якому всі входження символу char видалені. Використовуйте цикл while

function removeCharacter(str, char) {
  let result = "";       // створюємо порожній рядок, у який будемо додавати символи
  let i = 0;             // лічильник для циклу while
  
  while (i < str.length) {       // поки не досягнемо кінця рядка
    if (str[i] !== char) {       // якщо поточний символ не дорівнює символу для видалення
      result += str[i];         // додаємо його до результату
    }
    i++;                         // переходимо до наступного символу
  }
  
  return result;     // повертаємо рядок без вказаного символу
}

function removeCharacter(str, char) {
  return str.split(char).join("");
}

console.log(removeCharacter('Hello, world!', 'o')) // "Hell, wrld!"
console.log(removeCharacter('JavaScript', 'a')) // "JvScript"
console.log(removeCharacter('12345', '3')) // "1245"



// 9
//Дано рядок, який складається із символів.Напишіть функію
// яка перевіряє, що першим символом цього рядка є літера 'a'.
//  Якщо це так - вивести "так", у іншому випадку вивести "ні"

const string = 'abcde' // тестовий рядок 1
const stringSecond = 'bcde' // тестовий рядок 2
function checkFirstCharacter(str) {
  if (str[0] === 'a') {
    console.log("так");
  } else {
    console.log("ні");
  }
}
checkFirstCharacter(string); 
checkFirstCharacter(stringSecond);


function checkFirstCharacter(str) {
  console.log(str[0] === 'a' ? "так" : "ні");
}


// 10
// Написати функцію countOccurrences, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати кількість входжень
// символу char у рядку str.

function countOccurrences(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countOccurrences('Hello, world!', 'o')) // 2
console.log(countOccurrences('JavaScript', 'a')) // 2
console.log(countOccurrences('12345', '3')) // 1


// 11
// Написати функцію extractNumber,
// яка приймає рядок str і повертає перше число,
// знайдене в рядку.Якщо число не знайдено,
// функція повинна повертати null.

function extractNumber(str) {
  let number = "";
  let found = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char >= '0' && char <= '9') {
      number += char;
      found = true;
    } else if (found) {
      break; // якщо вже почали знаходити цифри і наступний символ — не цифра
    }
  }

  return number ? Number(number) : null;
}



function extractNumber(str) {
  const match = str.match(/\d+/); // шукає першу послідовність цифр
  return match ? Number(match[0]) : null;
}


console.log(extractNumber('abc123def')) // 123
console.log(extractNumber('no numbers here')) // null
console.log(extractNumber('42 is the answer')) // 42


// 12
// Написати функцію findLongestWord,
//     яка приймає рядок str і повертає найдовше слово в цьому рядку.
// Якщо таких слів кілька, повернути перше знайдене.

function findLongestWord(str) {
  const words = str.split(' ');
  let longestWord = '';

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}


console.log(findLongestWord('The quick brown fox jumps over the lazy dog')) // "jumps"
console.log(findLongestWord('JavaScript is awesome')) // "JavaScript"
console.log(findLongestWord('I love coding')) // "coding"


// 13
// Написати функцію capitalizeEverySecondChar,
// яка приймає рядок str і повертає новий рядок,
// у якому кожен другий символ є великим.

// function capitalizeEverySecondChar(str) {
//   let chars = [];

//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 !== 0) {
//       chars.push(str[i].toUpperCase());
//     } else {
//       chars.push(str[i].toLowerCase());
//     }
//   }

//   return chars.join('');
// }

// console.log(capitalizeEverySecondChar('hello world')) // "hElLo wOrLd"
// console.log(capitalizeEverySecondChar('javascript')) // "jAvAsCrIpT"
// console.log(capitalizeEverySecondChar('1234567890')) // "1234567890"


// 14
// Написати функцію hasUniqueChars,
//     яка приймає рядок str і повертає true,
//     якщо всі символи в рядку унікальні, і false в іншому випадку.

// function hasUniqueChars(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (i !== ) {
//       return true;;
//     } else {
//       return false;
//     }
//   }
// }
// console.log(hasUniqueChars('abcdef')) // true
// console.log(hasUniqueChars('hello')) // false
// console.log(hasUniqueChars('1234567890')) // true


