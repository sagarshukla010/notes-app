const fs = require('fs');

const dataBuffer = fs.readFileSync('./1-json.json');

console.log(dataBuffer);

// const dataJSON = dataBuffer.toString();

const parseData = JSON.parse(dataBuffer);

console.log(parseData);

parseData.name = "Sourabh";
parseData.age = 23;

console.log(parseData);

const stringData  = JSON.stringify(parseData);

fs.writeFileSync('./1-json.json',stringData);

// running 1-json.js creats the 1-json.json file...

// node 1-json.js


