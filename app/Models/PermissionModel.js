const {Sequelize, Model, DataTypes} = require("sequelize");
const dbCon = require('../../database/connection');

const PermissionModel = dbCon.define('Permission', {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        required: true,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'SUSPENDED', 'PENDING'),
        /*required: true,
        validate: {
            isIn: [
                ['ACTIVE', 'INACTIVE', 'SUSPENDED', 'PENDING']
            ],
        },*/
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
    }
});

/*const permissions = [
    'view-employee',
    'create-employee',
    'update-employee',
    'destroy-employee',
    'view-user',
    'create-user',
    'update-user',
    'destroy-user',
    'view-brand',
    'create-brand',
    'update-brand',
    'destroy-brand',
    'view-product-category',
    'create-product-category',
    'update-product-category',
    'destroy-product-category',
    'view-product',
    'create-product',
    'update-product',
    'destroy-product',
    'view-article-category',
    'create-article-category',
    'update-article-category',
    'destroy-article-category',
    'view-article',
    'create-article',
    'update-article',
    'destroy-article',
    'view-role',
    'create-role',
    'update-role',
    'destroy-role',
];

for (let i = 0; i < permissions.length; i++) {
    PermissionModel.create({
        name: permissions[i]
    });
}*/


module.exports = PermissionModel;

