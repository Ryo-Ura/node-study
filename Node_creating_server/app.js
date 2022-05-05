const http = require('http');
const express = require('express');
const routes = require('./routes');

const app = express();


/**
//this will be executed every incoming request
app.use((req, res, next)=>{
    console.log('In first middleware');
    
    //this allows request to continue its journy
    next();
});
app.use((req, res, next)=>{
    console.log('In second middleware');
    res.send('<h1>hello from the other side</h1>');
});
*/

app.use('/', (req, res, next)=>{
    res.send('<h1>Hello from the other side~</h1>');
});

// const server = http.createServer(app);
/**alternatively */
app.listen(3333);


/** 
    function reqListener(req, req){
    }
    http.createServer(reqListener);
*/

/**alternatively */
// const server = http.createServer(routes);
// server.listen(3333);