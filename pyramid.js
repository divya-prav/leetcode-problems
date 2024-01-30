const fs = require("fs");

function sortFileContent(fileName) {
  let result = "";
  const numberStringMap = new Map();
  // extract file content
  const contents = fs.readFileSync(fileName, "utf-8");
  const lines = contents.split("\n");

  
  // store the file content into the map
  lines.forEach((line) => {
    const [key, value] = line.split(/\s+/);
    if (key && value) {
      numberStringMap.set(Number(key), value);
    }
  });

  // generate pyramid end value 
  let j = 0,
    i = 1;
  while (j < numberStringMap.size) {
    j = j + i;
    result += numberStringMap.get(j) + " ";
    i++;
  }

  // return the decoded message;
  return result;
}

let decodeSecret = sortFileContent("file.txt");
console.log(decodeSecret);
