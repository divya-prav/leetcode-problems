function sortedSquaredArray(array) {
  // Write your code here.
  let squaredArray = [];
  let prevValue = array[0] * array[0];
  squaredArray.push(array[0] * array[0])
  for (let i = 1; i < array.length; i++) {
    let value = array[i] * array[i];
     console.log(value)
    if (prevValue < value) squaredArray.push(value);
    if (prevValue > value) squaredArray.unshift(value);
     prevValue = value;
  }

  return squaredArray;
}

console.log(sortedSquaredArray([-10, -5, 0, 5, 1]));
