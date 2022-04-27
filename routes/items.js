const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
const isLoggedIn = require('../config/auth');


router.get('/', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/:id', itemsCtrl.show);
router.post('/', itemsCtrl.create);
router.delete('/items/:itemId', itemsCtrl.deleteItem);


router.post('/', isLoggedIn, itemsCtrl.create);

module.exports = router;