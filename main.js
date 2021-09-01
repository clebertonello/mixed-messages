const fs = require("fs");

let currentPath = process.cwd();

let messages = fs.readFileSync(`${currentPath}/messages.txt`, 'utf8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  return data;
});

let messagesArray = messages.split('\n')

let messageIndex = getRandomInt(0, messagesArray.length)

console.log(messagesArray[messageIndex])

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
