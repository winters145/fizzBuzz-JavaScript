const fizzBuzz = require('./fizzbuzz.js');

describe ('fizzBuzz', () => {
  it ('returns "Fizz" when divisible by 3', () => {
    expect (fizzBuzz(3)).toBe ('Fizz');
  });
  it ('returns "Buzz" when divisible by 5', () => {
    expect (fizzBuzz(5)).toBe ('Buzz');
  });
  it ('returns "FizzBuzz" when divisible by 3 and 5', () => {
    expect (fizzBuzz(15)).toBe ('FizzBuzz');
  });
  it ('returns the number when not divisible by both 3 and 5', () => {
    expect (fizzBuzz(4)).toBe (4);
  });
});
