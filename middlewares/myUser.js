const jwt = require('jsonwebtoken');
const User = require('../app/Models/UserModel');

async function isUser(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let user = jwt.decode(token);

    const myUser = await User.findOne({
        where: {
            id: user.id,
        }
    });
    if (!myUser) {
        return res.status(401).json({
            state: true,
            message: "Forbidden!",
            data: null,
            errors: null
        });
    }
    next();
}

module.exports = isUser;
