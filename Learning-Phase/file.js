const fs = require('fs');
// //Synchronous way
// fs.writeFileSync('./text.txt', 'hey there, say ya rasollah !   ');
// //Asynchronous way
// fs.writeFile('./text2.txt', 'hey there, say ya rasollah !   ', (err) => {
//     console.log('file written');
// });


// const data = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(data);


// fs.readFile('./contact.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log('error occurred', err);
//         return;
//     }
//     console.log(data);
// });

fs.appendFileSync('./contact.txt', '\nNew contact added : 1234567890');
console.log('file appended');