const Item = require('../models/item');
const Order = require('../models/order');


module.exports = {
    index,
    show,
    new: newOrder
}

function index(req, res){
    const categories = Item.schema.path('category').enumValues;
    Item.find({category: req.query.category}, function(err, items) {
        res.render('items/index', { title: 'Menu', items, categories });
});

}

function show(req, res) {
    Item.findById(req.params.id, function(err, item){
        Order.find({item: Schema.Types.ObjectId}, function(err, orders) {
        res.render('/orders', { title: 'Orders', item, orders});
        });
    });
}

function newOrder(req, res) {
    res.render('/orders', { title: 'Add to Order' });
}