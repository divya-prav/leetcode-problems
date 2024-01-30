function repeatedDNA(s,k){
    let result = new Map();
    let repeatedSequence = [];

    for(let i=0;i<s.length-k+1;i++){
        let temp = s.substring(i,i+k);
       
        if(result.has(temp)){
            result.set(temp,result.get(temp)+1);
        }
        else{
            result.set(temp, 1)
        }
    }
    console.log(result);
   for(let [key,value] of result){
    if(value > 1){
        repeatedSequence.push(key)
    }
   }
   return repeatedSequence;
}

console.log(repeatedDNA('ATATATATATATATAT',6))