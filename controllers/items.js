const Item = require('../models/item');

module.exports = {
    index,
    show,
}

function index(req, res){
    const categories = Item.schema.path('category').enumValues;
    Item.find({category: req.query.category}, function(err, items) {
        res.render('items/index', { title: 'Menu', items, categories });
});
}

function show(req, res) {
    Item.findById(req.params.id)
    res.render('items/show', { items, categories });
}
