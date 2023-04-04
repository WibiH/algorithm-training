// Sum Arrays

/* Write a function that takes an array of numbers and 
returns the sum of the numbers. The numbers can be negative 
or non-integer. If the array does not contain any numbers 
then you should return 0. */

// Sum Numbers #1
function sum(numbers) {
  let result;
  if (numbers === undefined) {
    return 0;
  } else result = numbers.reduce((a, b) => a + b, 0);
  return result;
}
