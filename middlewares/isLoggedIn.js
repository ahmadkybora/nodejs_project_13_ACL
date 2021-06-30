const jwt = require('jsonwebtoken');
const Token = require('../app/Models/TokenModel');

async function isLoggedIn(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    //console.log(req.headers);
    let user = jwt.decode(token);
    /*console.log(token);
    console.log(user);*/
    const revoke = await Token.findOne({
        where: {
            userId: user.id,
            //revoke: 0,
        }
    });

    //console.log(revoke);

    if (token == null && revoke == null) {
        return res.status(401).json({
            state: true,
            message: "unAuthorized!",
            data: null,
            errors: null
        });
    } else {
        jwt.verify(token, process.env.Access_TOKEN_SECRET, (err, user) => {
            if (err) {
                return res.status(401).json({
                    state: true,
                    message: "unAuthorized!",
                    data: null,
                    errors: null
                });
            } else {
                req.user = user;
                next()
            }
        })
    }

}

module.exports = isLoggedIn;

