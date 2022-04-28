const express = require('express');
const router = express.Router();

const ordersCtrl = require('../controllers/orders');

router.post('/item/:itemId', ordersCtrl.addItem);
router.get('/:id', ordersCtrl.show);
router.delete('/item/:itemId', ordersCtrl.deleteItem);
router.post('/send', ordersCtrl.send);
router.post('/:id/serve', ordersCtrl.serve);
router.get('/', ordersCtrl.orderScreen);




module.exports = router;