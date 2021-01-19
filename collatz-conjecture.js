//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (positiveNum) => {
  let count = 0;

  if (positiveNum < 1) {
    throw `Only positive numbers are allowed`;
  }

  while (positiveNum > 1) {
    positiveNum % 2 === 0
      ? (positiveNum = positiveNum / 2)
      : (positiveNum = positiveNum * 3 + 1);
    count++
    
  }

  return count;
};
