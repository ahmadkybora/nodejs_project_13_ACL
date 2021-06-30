const express = require('express');
const router = express.Router();
const UserController = require('../../app/Controllers/Panel/UserController');
const isLoggedIn = require('../../middlewares/isLoggedIn');

router.get('/', /*isLoggedIn,*/ UserController.index);
//router.get('/:id', isLoggedIn, UserController.show);
router.post('/store', isLoggedIn, UserController.store);
router.get('/edit/:id', isLoggedIn, UserController.edit);
router.post('/update/:id', isLoggedIn, UserController.update);
router.get('/destroy/:id', isLoggedIn, UserController.destroy);
router.post('/search', isLoggedIn, UserController.search);

module.exports = router;
