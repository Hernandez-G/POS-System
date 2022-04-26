const Item = require('../models/item');
const Order = require('../models/order');

module.exports = {
    addItem,
    show
};

async function show(req, res){
    const order = await Order.findById(req.params.id);
    res.render('orders/show', { title: 'Order Detail', order });
}

async function addItem (req, res) {
    const item = await Item.findById(req.params.itemId);
    let order = await  Order.findOne({user: req.user._id, currentForUser: true});
    if (order) {
        order.items.push(item);
        await order.save();
    } else {
        order = await Order.create({
            user: req.user._id,
            items: [item]
        });
    }
    console.log(order);
     res.redirect(`/orders/${order._id}`);
}

