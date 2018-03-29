const express = require('express');
const router = express.Router();
var fs = require('fs');

router.post('/users', (req, res) => {
    // console.log(req.params);
    // console.log(req.body);
    // res.send('test');
    var data = JSON.stringify(req.body);

    fs.appendFile('demofile1.txt', data, function (err) {
        if (err) throw err;
        console.log('Saved!');
        res.end();
      });

   
 });

 module.exports =  router;
