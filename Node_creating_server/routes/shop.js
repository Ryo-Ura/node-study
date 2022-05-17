const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.send('<h1>sent from shop.js</h1>');
});

module.exports = router;