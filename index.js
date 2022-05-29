const http = require('http');
const path = require('path');
const fs = require('fs');
const quiz = require('./public/Quiz')

const server = http.createServer((req, res) => {
    // res.write(`<h1>Hello</h1>`);
    if(req.url=='/api'){
        // fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
        //     res.writeHead(200, {'Content-Type':'application/json'});
    
        //     res.end(JSON.stringify(quiz));
        //     // console.log(path.join(__dirname, 'public', 'index.html'));
        // })
        res.writeHead(200, {'Content-Type':'application/json'});
    
        res.end(JSON.stringify(quiz));
    }
    else
    {
        const error = {msg: `${req.url} Not a valid request!`}
        res.writeHead(404)
        res.end(JSON.stringify(error))
    }
    
}).listen(5001, ()=>console.log("Server running on port: 5001"))