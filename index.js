const myModule = require('./my-module');
const express = require('express');
// const { readFile, readFileSync } = require('fs');
const { readFile } = require('fs').promises;

// // Using readFileSync will read the file in a synchronous way. 
// // In this example, the second console log won't run until the first one is done.

// const txt = readFileSync('./hello.txt', 'utf8');

// console.log(txt);

// console.log("do this ASAP");

// // OR

// // doing it this way will make it so that everything runs
// // according to its order in the event loop. Because 
// // the readFile has a call back function, the second log
// // will execute first.

// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// })

// console.log('do this ASAP');


// THERE IS A THIRD WAY THAT INCLUDES PROMISES

// this will include using require.('fs').promises;

// // THIS WILL WORK, however is very new and not as recognized yet.
// const file = await readFile('./hello.txt', 'utf8');

// async function hello() {
//     const file = await readFile('./hello.txt', 'utf8');
// }

// hello();


// // Use the code below for synchronous code.
const app = express();

// app.get('/', (req, res) => {

//     readFile('./index.html', 'utf8', (err, html) => {

//         if (err) {
//             res.status(500).send("Sorry, it don't work");
//         }

//         res.send(html);
//     })
// });

// Here is the async way to do this to avoid callback hell in larger apps.

app.get('/', async (req, res) => {
    res.send( await readFile('./index.html', 'utf8'));
})

app.listen(process.env.PORT || 3000, () => console.log(`App available on http://localhost:3000`));

