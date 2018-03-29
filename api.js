const express = require('express');
const router = express.Router();

router.post('/users', (req, res) => {
    console.log(req.params);
    console.log(req.body);
    res.send('test');
   
 });

 module.exports =  router;