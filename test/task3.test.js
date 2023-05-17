const Call = require('../src/index.js');

describe('calculator unit testing',() => {
  describe('addition testing unit',() => {
    test('Number comfirmation case',() => {
      //arrange
      const Calculator = Call.calc;

      //act
      const add = Calculator.add(2,-2);
      if(isNaN(add)){
        throw new Error('add not returning a number');
      }

      //assert
      expect(add).not.toBe('number');
    })
    test('addition functionality case',() => {
      //arrange
      const Calculator = Call.calc;

      //act
      const add = Calculator.add(2,3);

      //assert
      expect(add).toBe(5);
    })
    test('Negative number case',() => {
      //arrange
      const Calculator = Call.calc;

      //act
      const add = Calculator.add(2,-2);
      if(add < 0){
        throw new Error('cant sum a number below zero');
      }

      //assert
      expect(add).not.toBeLessThan(0);
    })
  })
  describe('subtraction testing unit',() => {
    test('Number comfirmation case',() => {
      //arrange
      const Calculator = Call.calc;

      //act
      const subtract = Calculator.subtract(2,-2);
      if(isNaN(subtract)){
        throw new Error('subtract not returning a number');
      }

      //assert
      expect(subtract).not.toBe('number');
    })
    test('subtraction functionality case',() => {
      //arrange
      const Calculator = Call.calc;

      //act
      const subtract = Calculator.subtract(2,3);

      //assert
      expect(subtract).toBe(-1);
    })
    test('Negative number case',() => {
      //arrange
      const Calculator = Call.calc;

      //act
      const subtract = Calculator.subtract(2,-2);
      if(subtract < 0){
        throw new Error('cant sum a number below zero');
      }

      //assert
      expect(subtract).not.toBeLessThan(0);
    })
  })
  describe('division testing unit',() => {
   test('result being a number', () => {
    //arrange
    const Calculator = Call.calc;

    //act
    const division = Calculator.divide(10,2);

    if(isNaN(division)){
      throw new Error('the output is not a number');
    }

    //assert
    expect(typeof(division)).toBe('number');
   })
   test('negative result case', () => {
    //arrange
    const Calculator = Call.calc;

    //act
    const division = Calculator.divide(2,4);

    if(division < 0) {
      throw new Error('result cant be under zero');
    }

    //assert
    expect(division).not.toBeLessThan(0);
   })
   test('having Zero as an input', () => {
    //arrange
    const Calculator = Call.calc;

    //act
    const division = Calculator.divide(10,2);

    if(division == 0){
      throw new Error('can not have zero as an input');
    }

    //assert
    expect(division).not.toBe(0);
   })
  })
  describe('multiplication testing unit',() => {
    test('result being a number', () => {
      //arrange
      const Calculator = Call.calc;
  
      //act
      const mult = Calculator.multiply(10,2);
  
      if(isNaN(mult)){
        throw new Error('the output is not a number');
      }
  
      //assert
      expect(typeof(mult)).toBe('number');
     })
     test('having Zero as an input', () => {
      //arrange
      const Calculator = Call.calc;
  
      //act
      const mult = Calculator.multiply(10,2);
  
      if(mult == 0){
        throw new Error('can not have zero as an input');
      }
  
      //assert
      expect(mult).not.toBe(0);
     })
  })
})



