const express = require('express');
const router = express.Router();
const categoriesCtrl = require('../controllers/categories');
// const isLoggedIn = require('../config/auth');

router.get('/', categoriesCtrl.index);

router.get('/:id', categoriesCtrl.show);

// router.post('/', isLoggedIn, categoriesCtrl.create);

module.exports = router;