const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');

const UserPolicy = {
    all,
    view,
    create,
    update,
    destroy,
};

async function all(req, res, next) {
    /*console.log(req.userId);
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let user = jwt.decode(token);*/

    const myUser = await User.findOne({
        where: {
            id: req.userId
        }
    });
    /*const role = await Role.findOne({
        where: {

        }
    })*/
    if (!myUser) {
        return res
            .status(403)
            .json({
                state: true,
                message: "Forbidden!",
                data: {
                    data: null,
                },
                errors: null
            });
    }
    next();
}

async function view(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let user = jwt.decode(token);

    const myUser = await User.findOne({
        where: {
            id: user.id
        }
    });
    /*const role = await Role.findOne({
        where: {

        }
    })*/
    if (!myUser) {
        return res
            .status(403)
            .json({
                state: true,
                message: "Forbidden!",
                data: {
                    data: null,
                },
                errors: null
            });
    }
    next();
}

async function create(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let user = jwt.decode(token);

    const myUser = await User.findOne({
        where: {
            id: user.id
        }
    });
    /*const role = await Role.findOne({
        where: {

        }
    })*/
    if (!myUser) {
        return res
            .status(403)
            .json({
                state: true,
                message: "Forbidden!",
                data: {
                    data: null,
                },
                errors: null
            });
    }
    next();
}

async function update(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let user = jwt.decode(token);

    const myUser = await User.findOne({
        where: {
            id: user.id
        }
    });
    /*const role = await Role.findOne({
        where: {

        }
    })*/
    if (!myUser) {
        return res
            .status(403)
            .json({
                state: true,
                message: "Forbidden!",
                data: {
                    data: null,
                },
                errors: null
            });
    }
    next();
}

async function destroy(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let user = jwt.decode(token);

    const myUser = await User.findOne({
        where: {
            id: user.id
        }
    });
    /*const role = await Role.findOne({
        where: {

        }
    })*/
    if (!myUser) {
        return res
            .status(403)
            .json({
                state: true,
                message: "Forbidden!",
                data: {
                    data: null,
                },
                errors: null
            });
    }
    next();
}

module.exports = UserPolicy;
