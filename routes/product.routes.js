const express = require('express');
const router = express.Router();
const product = require('../models/product.model');
// Require the controllers WHICH WE DID NOT CREATE YET!!
// const product_controller = require('../controllers/product.controller');



// a simple test url to check that all of our files are communicating correctly.
router.get('/user', function (req, res) {
    product.find(function(err, found){
        console.log(found);
        if(err){
            res.send({
                msg: err,
            });
        } else {
            res.send({
                msg: "Data is here",
                data: found
            });
        }
    })
});

router.post('/user', function(req, res){
    console.log("++++++++++++++++++++++++++++++++++++");
    console.log(req.body);

    insertdata = new product();
    insertdata.name = req.body.name;
    insertdata.lastname = req.body.lastname;       
    insertdata.save(function(err, saved){
        if(err){
            res.send(err);
        } else{
            res.send(saved);
        }
    });
    // res.send("this is post root");

    console.log("Data is saved")
})

module.exports = router;