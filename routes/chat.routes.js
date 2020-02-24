const express = require('express');
const router = express.Router();
const Chat = require('../models/chat.model');
// Require the controllers WHICH WE DID NOT CREATE YET!!
// const product_controller = require('../controllers/product.controller');



// a simple test url to check that all of our files are communicating correctly.
router.get('/chat', function (req, res) {
    Chat.find(function(err, found){
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

router.post('/chat', function(req, res){
    console.log("++++++++++++++++++++++++++++++++++++");
    console.log(req.body);

   
    insertdata = new Chat();
    insertdata.Chatid = req.body.Chatid;
    insertdata.name = req.body.name;
    insertdata.lastname = req.body.lastname;
    insertdata.Chat = req.body.Chat;
    insertdata.latitude = req.body.latitude;       
    insertdata.longitude = req.body.longitude;
    insertdata.chatDate = req.body.chatDate;
    insertdata.save(function(err, saved){
        if(err){
            res.send(err);
        } else{
            res.send(saved);
          //  res.send("this is saved!!");
        }
    });
   // res.send("this is post root");

    console.log("Data is saved")
})

module.exports = router;