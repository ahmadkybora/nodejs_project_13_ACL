const express = require('express');
const router = express.Router();
const BrandController = require('../../app/Controllers/Panel/BrandController');
const isLoggedIn = require('../../middlewares/isLoggedIn');
const isAdmin = require('../../middlewares/isAdmin');
const BrandRequest = require('../../app/Requests/brandRequest');

router.get('/', isLoggedIn, isAdmin, BrandController.index);
//router.get('/:id', isLoggedIn, BrandController.show);
router.get('/create', isLoggedIn, BrandController.create);
router.post('/store', isLoggedIn, /*BrandRequest.create,*/ BrandController.store);
router.get('/edit/:id', isLoggedIn, BrandController.edit);
router.post('/update/:id', isLoggedIn, BrandRequest.update, BrandController.update);
router.get('/destroy/:id', isLoggedIn, BrandController.destroy);
router.post('/search', isLoggedIn, BrandController.search);

module.exports = router;

