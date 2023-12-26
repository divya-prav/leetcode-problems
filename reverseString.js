function reverseString(num){ //num = 321
    let result = 0;
    let sign = num >=0 ? 'positive':'negative';
    if(num < 0 ) num = Math.abs(num);
    while(num > 0){
       let temp = num % 10 ;  // 1  //2  //3
       result += temp;  // 0+1   // 12  //123
       result *=10;  //10  //120 //1230
       num =Math.floor(num/10) ;
    }
   return result = sign === 'positive' ? result/10 : -result/10
}

console.log(reverseString(-1));