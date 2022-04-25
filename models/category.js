const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const categorySchema = new Schema({
    drink: [{type: Schema.Types.ObjectId, ref:'category'}]


});
    
    // pastry: [{type: Schema.Types.ObjectId, ref:'category'}]


module.exports = mongoose.model('Category', categorySchema)