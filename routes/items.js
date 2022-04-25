const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');
// const isLoggedIn = require('../config/auth');

router.get('/', itemsCtrl.index);

router.get('/:id', itemsCtrl.show);

// router.post('/', isLoggedIn, categoriesCtrl.create);

module.exports = router;