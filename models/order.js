const mongoose = require('mongoose');
const itemSchema = require('./itemSchema');

const Schema = mongoose.Schema;

const orderSchema = new Schema ({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    price: {
        type: Number,
    },
    items: [itemSchema],
    active: {
        type: Boolean,
        default: true
    },
    currentForUser:{
        type: Boolean,
        default: true
    }
});



module.exports = mongoose.model('Order', orderSchema);