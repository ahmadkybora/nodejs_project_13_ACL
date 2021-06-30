//const isLoggedIn = require('../../../middlewares/sessions/isLoggedIn');
const {formatDate} = require('../../../helpers/jalali');
const isLoggedIn = require('../../../middlewares/isLoggedIn');

const DashboardController = {
    index
};

function index(req, res) {
    res.render("panel/dashboard", {
        //message: req.flash("success"),
        formatDate,
        isLoggedIn,
    });
}

module.exports = DashboardController;

