let Twosum = function(nums,target){
   
    for(let i= 0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++)
        if(nums[j] + nums[i] === target){
           return [i,j]
        }
    }

    return null;
}

console.log(Twosum([2,7,11,3],9));