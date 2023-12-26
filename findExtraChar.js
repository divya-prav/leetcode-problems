function compareAscii(str,value){
    for(let i=0;i<str.length;i++){
        value = str.codePointAt(i)^value;
       
    }
    return value;
}


function findValue(str,value){
    for(let i=0;i < str.length;i++){
        if(value === str.codePointAt(i)) return i;
    }
    return null;
}


function findExtrachar(str1,str2){
    let result =0;

    let str1XOR = compareAscii(str1,result);


    let str2XOR = compareAscii(str2,str1XOR);
  

    if(str1.length > str2.length) result = findValue(str1,str2XOR);
    if(str1.length < str2.length) result = findValue(str2,str2XOR);

    return result;


}

console.log(findExtrachar("wxyz","zwxgy"))