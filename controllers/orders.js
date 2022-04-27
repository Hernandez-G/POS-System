const Item = require('../models/item');
const Order = require('../models/order');

module.exports = {
    addItem,
    show,
    // update
    // deleteItem,
    // update
};


// function deleteItem(req, res) {
//     Order.findOneAndDelete(
//         {_id: req.params.id, itemId: req.user._id}, function(err){
//             res.redirect(`/orders/${Order._id}`);
//         }
//     )
// }

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

