const fs = require('fs');
//Synchronous way
fs.writeFileSync('./text.txt', 'hey there, say ya rasollah !   ');
//Asynchronous way
fs.writeFile('./text2.txt', 'hey there, say ya rasollah !   ', (err) => {
    console.log('file written');
});
