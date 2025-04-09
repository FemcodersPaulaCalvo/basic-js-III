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
