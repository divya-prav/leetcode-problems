function findMax(arr,k){
    let output = [];

    for(let i=0;i<arr.length-k+1;i++){
        let max = arr[i]
        for(let j=i+1;j<i+k;j++){
             if(arr[j] > max){
                max = arr[j]
             }
        }
        output.push(max);

    }

    return output;
}


console.log(findMax( [-4, 5, 4, -4, 4, 6, 7, 20],2))