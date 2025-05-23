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
    if (string1[i] == char1) {
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

// EXERCISE 3
function ascendingOrderArray(array1) {
  let orderedArray = [];

  for (let i = 0; i < array1.length; i++) {
    let inserted = false;

    for (let j = 0; j < orderedArray.length; j++) {
      if (array1[i] < orderedArray[j]) {
        orderedArray.splice(j, 0, array1[i]);
        inserted = true;
        break;
      }
    }

    if (!inserted) {
      orderedArray.push(array1[i]);
    }
  }

  return orderedArray;
}
const arrayPrueba = [9, 4, 5, 3, 7, 2, 8, 6, 1];

// console.log(ascendingOrderArray(arrayPrueba)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// EXERCISE 4
function arrayBiggerNumbersThanIndex(array1, num1) {
  let biggestNumbersArray = [];

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > num1) {
      biggestNumbersArray.push(array1[i]);
    }
  }

  return biggestNumbersArray;
}

// console.log(arrayBiggerNumbersThanIndex(arrayPrueba, 5));

// EXERCISE 5
function join2arrays(array1, array2) {
  let joinArrays = [];

  for (let i = 0; i < array1.length; i++) {
    joinArrays.push(array1[i]);
  }
  for (let i = 0; i < array2.length; i++) {
    joinArrays.push(array2[i]);
  }

  return joinArrays;
}

// console.log(join2arrays(arrayPrueba, arrayPrueba));

// EXERCISE 6
function biggestNumberArray(array1) {
  let biggestNumber = array1[0];
  for (let i = 1; i < array1.length; i++) {
    if (array1[i] > biggestNumber) {
      biggestNumber = array1[i];
    }
  }
  return biggestNumber;
}

// console.log(biggestNumberArray(arrayPrueba));

// EXERCISE 7
function smallestNumberArray(array1) {
  let smallestNumber = array1[0];
  for (let i = 1; i < array1.length; i++) {
    if (array1[i] < smallestNumber) {
      smallestNumber = array1[i];
    }
  }
  return smallestNumber;
}

// console.log(smallestNumberArray(arrayPrueba));

// EXERCISE 8
function quantityOfNumberInArray(array1, num1) {
  let conunter = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == num1) {
      conunter++;
    }
  }
  return conunter;
}

const arrayPrueba2 = [
  1, 2, 3, 4, 4, 5, 6, 7, 8, 4, 9, 1, 2, 3, 4, 5, 6, 7, 4, 8, 9, 4,
];
// console.log(quantityOfNumberInArray(arrayPrueba2, 4));

// EXERCISE 9
function numbersUnduplicatedArray(array1) {
  let uniqueArray = [array1[0]];
  for (let i = 1; i < array1.length; i++) {
    if (!uniqueArray.includes(array1[i])) {
      uniqueArray.push(array1[i]);
    }
  }
  return uniqueArray;
}

// console.log(numbersUnduplicatedArray(arrayPrueba2));

// EXERCISE 10
function reverseArray(array1) {
  let reverseArray = [];
  for (let i = 0; i < array1.length; i++) {
    reverseArray.unshift(array1[i]);
  }
  return reverseArray;
}

// console.log(reverseArray(arrayPrueba));

//          OBJECTS

let person1 = { name: "Paula", surname: "Calvo", age: 22 };
// EXERCISE 1
function propertyName(obj1) {
  return obj1.name;
}

// console.log(propertyName(person1));

// EXERCISE 2
function changePropertyAge(obj1, num1) {
  obj1.age = num1;
  console.log(obj1);
}

// changePropertyAge(person1, 23);

// EXERCISE 3
function newPropertyObject(obj1, str1) {
  obj1[str1] = null;
  console.log(obj1);
}

// newPropertyObject(person1, "canDrive");

// EXERCISE 4
function deleteProperty(obj1, str1) {
  delete obj1[str1];
  console.log(obj1);
}

// deleteProperty(person1, "name");

// EXERCISE 5
function quantityPropertiesObj(obj1) {
  return Object.keys(obj1).length;
}

// console.log(quantityPropertiesObj(person1));

// EXERCISE 6
function propertyExist(obj1, str1) {
  return Object.keys(obj1).includes(str1);
}

// console.log(propertyExist(person1, "name"));
// console.log(propertyExist(person1, "firstName"));

// EXERCISE 7
function arrayValuesObj(obj1) {
  return Object.values(obj1);
}

// console.log(arrayValuesObj(person1));

// EXERCISE 8
function compareObj(obj1, obj2) {
  const property1 = Object.keys(obj1);
  const values1 = Object.values(obj1);
  const property2 = Object.keys(obj2);
  const values2 = Object.values(obj2);
  let allSame = true;

  if (
    property1.length == property2.length &&
    values1.length == values2.length
  ) {
    for (let i = 0; i < property1.length; i++) {
      if (property1[i] != property2[i] || values1[i] != values2[i]) {
        allSame = false;
        break;
      }
    }
  } else {
    allSame = false;
  }

  return allSame;
}

let person2 = { name: "Calvo", surname: "Paula", age: 22 };

// console.log(compareObj(person1, person2));

// EXERCISE 9
function copyObject(obj1) {
  return Object.assign({}, obj1);
}

// console.log(copyObject(person1));

// EXERCISE 10
function joinObjects(obj1, obj2) {
  return Object.assign(obj1, obj2);
}

// console.log(joinObjects(person1, person2));
