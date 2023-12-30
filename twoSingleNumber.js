let twoSingleNumbers = function(arr){
    let bitwiseSum = 0;
    
    for (let i = 0; i < arr.length ; i++){
      bitwiseSum ^= arr[i];
    }
    console.log(bitwiseSum)
    let bitwiseMask = bitwiseSum & (-bitwiseSum);
    console.log(bitwiseMask)
    let results = 0;
    
    for (let i = 0;i < arr.length; i++){
      if (bitwiseMask & arr[i]){
        results = results ^ arr[i];
      }
    }
  
    return [results, bitwiseSum ^ results];
  }
  console.log(twoSingleNumbers([1,2,3,3,2,1,4,5]))