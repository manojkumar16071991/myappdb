const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const product = require('./routes/product.routes.js'); // Imports routes for the products
const Chat = require('./routes/chat.routes.js'); // Imports routes for the products
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
mongoose.Promise = global.Promise;
mongoose.connect(config.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/products', product);
app.use('/Chat', Chat);
let port = 4000;
app.listen(config.serverport, () => {
    console.log('Server is up and running on port numner ' + port);
});