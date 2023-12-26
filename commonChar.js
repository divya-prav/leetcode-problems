

function commonChar(strings){
let map = new Map();
let commonChar = []
for(let i =0;i<strings.length;i++){
 let tempSet = new Set(strings[i])

  for(let key of tempSet){
    console.log(key)
    if(map.has(key)){
      map.set(key,map.get(key)+1)
    }
    else{
    map.set(key,1);
}
  }
 // console.log(map)
}

for(let [key,value] of map){
  if(value === strings.length){
    commonChar.push(key);
  }
  
}
  
 
return commonChar;}

console.log(commonChar(['abc','bcd','cacbcd']))