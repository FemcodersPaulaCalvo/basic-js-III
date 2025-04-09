//          NUMBERS

// EXERCISE 1
function numberSum(num1, num2) {
  return num1 + num2;
}

// console.log(numberSum(3, 7));

// EXERCISE 2
function numberRest(num1, num2) {
  return num1 - num2;
}

// console.log(numberRest(10, 7));

// EXERCISE 3
function numberMultiplication(num1, num2) {
  return num1 * num2;
}

// console.log(numberMultiplication(15, 4));

// EXERCISE 4
function numberDivision(num1, num2) {
  return num1 / num2;
}

// console.log(numberDivision(60, 3));

// EXERCISE 5
function numberRaise(base, exponent) {
  return base ** exponent;
}

// console.log(numberRaise(4, 2));

// EXERCISE 6
function numberRest(num1, num2) {
  return num1 % num2;
}

// console.log(numberRest(100, 3));

// EXERCISE 7
function numberSquareRoot(num) {
  return Math.sqrt(num);
}

// console.log(numberSquareRoot(16));

// EXERCISE 8
function numberAbsoluteValue(num) {
  return Math.abs(num);
}

// console.log(numberAbsoluteValue(15));

// EXERCISE 9
function numberRound(num) {
  return Math.round(num);
}

// console.log(numberRound(9.8));
// console.log(numberRound(9.2));

// EXERCISE 10
function randomNumber() {
  return Math.random();
}

// console.log(randomNumber());

//          LETTERS
// EXERCISE 1
function concatenationLetters(letters1, letters2) {
  return letters1 + letters2;
}

// console.log(concatenationLetters("Hola", "Mundo"));

// EXERCISE 2
function sizeLetters(letters1) {
  return letters1.length;
}

// console.log(sizeLetters("Hola"));

// EXERCISE 3
function upperCaseLetters(letters1) {
  return letters1.toUpperCase();
}

// console.log(upperCaseLetters("hola caracola"));

// EXERCISE 4
function lowerCaseLetters(letters1) {
  return letters1.toLowerCase();
}

// console.log(lowerCaseLetters("HOLITA VECINITO"));

// EXERCISE 5
function positionCharacterLetters(letters1, num1) {
  return letters1.charAt(num1);
}

// console.log(positionCharacterLetters("Corre platano", 7));

// EXERCISE 6
function reversedLetters(letters1) {
  return letters1.split("").reverse().join("");
}

// console.log(reversedLetters("Huevos fritos con tomate"));

// EXERCISE 7
function quantityCharactersString(string1, char1) {
  let counterCharacters = 0;
  for (let i = 0; i < string1.length; i++) {
    if (letters1[i] == char1) {
      counterCharacters++;
    }
  }
  return counterCharacters;
}

// console.log(quantityCharactersString("Hola don Pepito", "o"));

// EXERCISE 8
function removeSpacesString(string1) {
  return string1.replaceAll(" ", "");
}

// console.log(removeSpacesString(" car men "));

// EXERCISE 9
function itsPalindromeString(string1) {
  return string1 == reversedLetters(string1);
  //   return string1 == string1.split("").reverse().join("");
}

// console.log(itsPalindromeString("reconocer"));
// console.log(itsPalindromeString("desconocido"));

// EXERCISE 10
function firstUpperCaseString(string1) {
  let newString = [];
  const arrayString = string1.split(" ");
  for (let i = 0; i < arrayString.length; i++) {
    const upperCase = arrayString[i].slice(0, 1).toUpperCase();
    const lowerCase = arrayString[i].slice(1, arrayString[i].length);
    newString.push(upperCase + lowerCase);
  }
  return newString.join(" ");
}

// console.log(firstUpperCaseString("hola, don jose"));

//          ARRAYS
// EXERCISE 1
function sumArrayOfNumbers(array1) {
  let sumNumber = 0;
  for (let i = 0; i < array1.length; i++) {
    sumNumber += array1[i];
  }
  return sumNumber;
}

// console.log(sumArrayOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// EXERCISE 2
function averageArrayOfNumbers(array1) {
  let sumNumber = 0;
  for (let i = 0; i < array1.length; i++) {
    sumNumber += array1[i];
  }
  return sumNumber / array1.length;
}

// console.log(averageArrayOfNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));
