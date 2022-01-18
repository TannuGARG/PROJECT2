const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

// we have defined how r schema must look like
CitySchema = new mongoose.Schema({
    id:  Number,
    name: String ,
    state: String

})


//created a collection named User
const Cities= mongoose.model("Cities", CitySchema);

module.exports = Cities;