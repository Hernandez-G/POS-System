const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {type: String, required: true},
    category: {
        type: String, 
        required: true,
        enum: ['Drinks', 'Pastries']
    },
    price: {
        type: Number,
        required: true
    },
    imageFileName: {
        type: String
    }
});

module.exports =  itemSchema