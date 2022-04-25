const Category = require('../models/category');

module.exports = {
    index,
    show
}

function index(req, res){
    Category.find({}, function(err, categories) {
    res.render('categories/index', { title: 'Menu', categories });
});
}

function show(req, res) {
    Category.findById(req.params.id)
    res.render('categories/show', { categories });
}