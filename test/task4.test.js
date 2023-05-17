const capitalisation = require('../src/index.js');
describe('capitalisation unit testing', () => {
  test('capitalisation test', () =>{
    //arrange
    const capitalString = capitalisation.capitalisation;

    //act
    const NewString = capitalString('text');
    const firstLetter = NewString.charAt(0);

    if(typeof firstLetter === 'number'){
      throw new Error('capitalisation can not work on numbers');
    }

    if(!firstLetter == firstLetter.toUpperCase()){
      throw new Error('capitalisation did not work');
    }

    //assert
    expect(typeof(firstLetter)).toBe('string');
    expect(NewString).toMatch(/[A-Z]/);
  })
})