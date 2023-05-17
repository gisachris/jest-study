//task1
//string length task

const strlength = (str) => {
  return str.length;
}

//task2
const reverseString = (string) => {
  const reversed = string.split('').reverse().join('');
  return reversed;
}

//task3
class Calculator {
  add(a,b){
    return a + b;
  }

  subtract(a,b){
    return a - b;
  }

  divide(a,b){
    return a / b;
  }

  multiply(a,b){
    return a * b;
  }
}
const calc = new Calculator();

//task4
const capitalisation = string => {
  const firstLetter = string.charAt(0).toUpperCase();
  const restOfText = string.slice(1);
  const capitalizedString = firstLetter + restOfText;
  return capitalizedString;
};


console.log(capitalisation('text'));

module.exports = {
  strlength,reverseString,calc,capitalisation
};