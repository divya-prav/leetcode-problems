function isValidSubsequence(array, sequence) {
  // Write your code here.

  let arrayPointer = 0;
  let sequencePointer = 0;

  while (arrayPointer < array.length || sequencePointer < sequence.length) {
    if (array[arrayPointer] === sequence[sequencePointer]) {
      if (sequencePointer === sequence.length - 1) return true;
      arrayPointer++;
      sequencePointer++;
    } else {
      arrayPointer++;
    }
  }
  return false;
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
