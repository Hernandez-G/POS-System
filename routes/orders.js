const express = require('express');
const router = express.Router();

const ordersCtrl = require('../controllers/orders');

router.post('/item/:itemId', ordersCtrl.addItem);
router.get('/:id', ordersCtrl.show);
module.exports = router;