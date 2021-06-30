const express = require('express');
const router = express.Router();
const MyProfileController = require('../../app/Controllers/Profile/MyProfileController');
const isLoggedIn = require('../../middlewares/isLoggedIn');
const myUser = require('../../middlewares/myUser');

router.get('/', isLoggedIn, myUser, MyProfileController.index);
router.post('/update/:id', isLoggedIn, myUser, MyProfileController.update);

module.exports = router;
