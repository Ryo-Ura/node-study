const http = require('http');
const express = require('express');
const routes = require('./routes');
const { application } = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

// this will be called and parse body prior to...
app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(shopRoutes);
app.use((req, res,next)=>{
    res.status(404).send('<h1>Page not found</h1>');
})


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

/*
app.use('/',(req, res, next)=>{
    console.log('<h1>this shoud be called always</h1>');
    next();
});
*/

/*
// order matters since we are not calling next 
app.use('/add-product', (req, res, next)=>{
    console.log('in the other middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">add product</button></input></form>');
});

app.post('/product',(req, res, next)=>{
    // get body
    console.log(req.body);
    res.redirect('/');
})
*/


// app.use('/', (req, res, next)=>{
//     res.send('<h1>Hello from the other side~</h1>');
// });

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