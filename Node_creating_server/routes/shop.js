const express = require('express');
const router = express.Router();
const adminData = require('./admin');

router.get('/',(req, res, next)=>{
    // res.send('<h1>sent from shop.js</h1>');
    console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {prods: products, docTitle: 'Shop'});
});

module.exports = router;