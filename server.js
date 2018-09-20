// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost:27017/rest_test',{ useNewUrlParser: true });

// Express
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// Routes
app.use('/api',require('./routes/api'));

// Start Server
app.listen(4000);
console.log("API telah berjalan di port 4000");