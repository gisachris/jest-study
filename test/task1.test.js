const task1 = require('../src/index.js');

test('string does meet requirements', () => {
  // Arrange
  const stringFunc = task1.strlength;
  const text = 'text';

  // Act
  const result = stringFunc(text);

  // Check conditions and throw errors if not met
  if (result < 1) {
    throw new Error('The result is less than 1');
  } else if (result > 10) {
    throw new Error('The result is greater than 10');
  }

  // Assert
  expect(typeof result).toBe('number');
});
