// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var biteSchema = mongoose.Schema({

    bite            : {
        name        : String,
        description : String,
        created     : { type: Date, default: Date.now },
        created_by  : String
    }
});

// create the model for users and expose it to our app
module.exports = mongoose.model('Bite', biteSchema);
