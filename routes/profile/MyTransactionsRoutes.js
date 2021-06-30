const express = require('express');
const router = express.Router();
const MyTransactionController = require('../../app/Controllers/Profile/MyTransactionController');
const isLoggedIn = require('../../middlewares/isLoggedIn');
const myUser = require('../../middlewares/myUser');

router.get('/', isLoggedIn, myUser, MyTransactionController.index);
router.post('/store', isLoggedIn, myUser, MyTransactionController.store);
router.post('/update/:id', isLoggedIn, myUser, MyTransactionController.update);
router.post('/destroy/:id', isLoggedIn, myUser, MyTransactionController.destroy);
router.post('/search', isLoggedIn, myUser, MyTransactionController.search);

module.exports = router;
