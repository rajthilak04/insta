const express = require('express');
const router = express.Router();
var fs = require('fs');

router.post('/users', (req, res) => {
   console.log(req.params);
    console.log(req.body);
 });

 module.exports =  router;
