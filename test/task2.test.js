const task2 = require('../src/index.js');

//unit test
test('string is reversed',() => {
  //arrange
  const reversed = task2.reverseString;
  const reversable = 'reversable';
  
  //act
  if(reversed(reversable) == reversable){
    throw new Error('the string did not reverse');
  }
  
  //assert
  expect(reversed(reversable)).not.toBe(reversable);
})