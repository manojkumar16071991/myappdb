const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ChatSchema = new Schema({
    Chatid:{type: String, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    lastname: {type: String, required: true, max: 100},
    Chat:{type: String, required: true, max: 100},
    latitude:{type: String, required: true, max: 100},
    longitude:{type: String, required: true, max: 100},
   chatDate:  {type: String, required: true, max: 100},
});


// Export the model
module.exports = mongoose.model('chat', ChatSchema);