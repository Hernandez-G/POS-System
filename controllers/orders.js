const Item = require('../models/item');
const Order = require('../models/order');

module.exports = {
    addItem,
    show,
    deleteItem,
    send,
    orderScreen
};

async function orderScreen(req, res){
    const orders = await Order.find({active: true});
    res.render('orders/screen', { title: 'Active Orders', orders });
}

async function send (req, res) {
    const order = await  Order.findOne({user: req.user._id, currentForUser: true});
    order.currentForUser = false;
    await order.save();
    res.redirect('/items');
}



function deleteItem(req, res) {
    Order.findOne(
        {"items._id": req.params.itemId, "items.user": req.user._id}, function(err, order){
            if (!order || err) return res.redirect(`/orders/${order._id}`)
            order.items.remove(req.params.itemId);
            order.save(function(err){
                res.redirect(`/orders/${order._id}`);
            });
        }
    )
}

async function show(req, res){
    const order = await Order.findById(req.params.id);
    res.render('orders/show', { title: 'Order Details', order });
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

