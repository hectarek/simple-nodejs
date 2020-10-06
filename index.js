const { readFile, readFileSync } = require('fs');

// // Using readFileSync will read the file in a synchronous way. 
// // In this example, the second console log won't run until the first one is done.

// const txt = readFileSync('./hello.txt', 'utf8');

// console.log(txt);

// console.log("do this ASAP");

// // OR

// doing it this way will make it so that everything runs
// according to its order in the event loop. Because 
// the readFile has a call back function, the second log
// will execute first.

readFile('./hello.txt', 'utf8', (err, txt) => {
    console.log(txt);
})

console.log('do this ASAP');

