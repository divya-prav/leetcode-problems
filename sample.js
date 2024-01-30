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

//console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]));
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j = j + k - 1) {
      if (nums[i] === nums[j] && Math.abs(i - j) <= k) {
        console.log(i, j);
        return true;
      }
    }
  }
  return false;
};

//console.log(containsNearbyDuplicate([1,2,3,1,2,3],2))

function getSum(num) {
  let sum = 0;
  for (let key of num) {
    sum += key;
  }
  return sum;
}

var maximumSubarraySum = function (nums, k) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let kElement = new Set();
    for (let j = i; j < k+i; j++) {
      kElement.add(nums[j]);
    }
    if (kElement.size == k) {
      let sum = getSum(kElement);
      result.push(sum);
    }
  }

  return Math.max(...result);
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
