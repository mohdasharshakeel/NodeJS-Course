const http = require('http');

const myServer = http.createServer((req, res) => {
    // console.log('new req rec')
    console.log(req.headers)
    res.end('Hello from my server');
})

myServer.listen(8000, () => {
    console.log('Server is listening on port 8000');
}) 