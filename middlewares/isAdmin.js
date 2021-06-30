const jwt = require('jsonwebtoken');
const Employee = require('../app/Models/EmployeeModel');

async function isAdmin(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let user = jwt.decode(token);

    const isAdmin = await Employee.findOne({
        where: {
            id: 2,
        }
    });
    if (!isAdmin) {
        return res.status(401).json({
            state: true,
            message: "You are not admin!",
            data: null,
            errors: null
        });
    }
    next();
}

module.exports = isAdmin;
