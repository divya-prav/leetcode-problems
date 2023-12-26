
function getOrDefault(map, key, defaultValue) {
    return map.has(key) ? map.get(key) : defaultValue;
}

function isTwoMapEqual(map1,map2){
    if (map1.size !== map2.size) {
        return false;
    }

    for(let [key,value] of map1){
       if(!map2.has(key) || map2.get(key) !== value){
        return false;
       }
    }
    return true;
}


var isAnagram = function (s, t) {

  if(s == null && t == null)
    return true;

  if(s == null && t!=null)
    return false;

  if(s != null && t== null)
    return false;

  if(s.length !== t.length)
    return false;


  let str1Map = new Map();
  let str2Map = new Map();

  for (let i = 0; i < s.length; i++) {
    let temp1 = s.charAt(i);
    let temp2 = t.charAt(i);

    str2Map.set(temp2, getOrDefault(str2Map, temp2, 0)+1);
    str1Map.set(temp1, getOrDefault(str1Map, temp1, 0)+1);
    // if (str2Map.has(temp2)) {
    //   str2Map.set(temp2, str2Map.get(temp2) + 1);
    // } else {
    //   str2Map.set(temp2, 1);
    // }

    // if (str1Map.has(temp1)) {
    //   str1Map.set(temp1, str1Map.get(temp1) + 1);
    // } else {
    //   str1Map.set(temp1, 1);
    // }
  }
  return isTwoMapEqual(str1Map,str2Map);

  
};

console.log(isAnagram("anagram", "nagaram"));
