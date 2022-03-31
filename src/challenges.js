// Desafio 1
function compareTrue(condition1, condition2) {
  if (condition1 === true && condition2 === true) {
    return (true);
  } return (false);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3 (Referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
function splitSentence(stringToSplit) {
  return (stringToSplit.split(' '));
}

// Desafio 4
let comma = ', ';
function concatName(arrayToConcatenate) {
  return ((arrayToConcatenate[arrayToConcatenate.length - 1]) + comma + (arrayToConcatenate[0]));
}

// Desafio 5
function footballPoints(wins, ties) {
  let seasonPoints = (wins * 3) + (ties * 1);
  return (seasonPoints);
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  let highestNumber = arrayOfNumbers[0];
  let countOfTimes = 0;

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    if (arrayOfNumbers[i] > highestNumber) {
      highestNumber = arrayOfNumbers[i];
      countOfTimes = 1;
    } else if (arrayOfNumbers[i] === highestNumber) {
      countOfTimes += 1;
    }
  }
  return countOfTimes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2';
  } return 'cat1';
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if ((array[i] % 3 === 0) && (array[i] % 5 === 0)) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      fizzBuzzArray.push('fizz');
    } else if (array[i] % 5 === 0) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(phrase) {
  let codedPhrase = '';
  for (let lowerCaseLetter of phrase) {
    if (lowerCaseLetter === 'a') {
      codedPhrase = codedPhrase + '1';
    } else if (lowerCaseLetter === 'e') {
      codedPhrase = codedPhrase + '2';
    } else if (lowerCaseLetter === 'i') {
      codedPhrase = codedPhrase + '3';
    } else if (lowerCaseLetter === 'o') {
      codedPhrase = codedPhrase + '4';
    } else if (lowerCaseLetter === 'u') {
      codedPhrase = codedPhrase + '5';
    } else {
      codedPhrase = codedPhrase + lowerCaseLetter
    }
  }

  return codedPhrase;
}

function decode(phrase) {
  let decodedPhrase = '';
  for (let lowerCaseLetter of phrase) {
    if (lowerCaseLetter === '1') {
      decodedPhrase = decodedPhrase + 'a';
    } else if (lowerCaseLetter === '2') {
      decodedPhrase = decodedPhrase + 'e';
    } else if (lowerCaseLetter === '3') {
      decodedPhrase = decodedPhrase + 'i';
    } else if (lowerCaseLetter === '4') {
      decodedPhrase = decodedPhrase + 'o';
    } else if (lowerCaseLetter === '5') {
      decodedPhrase = decodedPhrase + 'u';
    } else {
      decodedPhrase = decodedPhrase + lowerCaseLetter
    }
  }

  return decodedPhrase;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
