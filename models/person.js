
// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema - Membuat Schema
var personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String
});

// Return Model - Mengembalikan model
module.exports = restful.model('Persons', personSchema);