function singleNumber(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = array[i] ^ result;
  }
  return result;
}

console.log(singleNumber([2,2,3,4,5,3,4]))
