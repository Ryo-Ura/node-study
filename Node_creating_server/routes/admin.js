const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/add-product', (req, res, next)=>{
    console.log('in the other middleware');
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">add product</button></input></form>');
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

router.post('/add-product',(req, res, next)=>{
    // get body
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;