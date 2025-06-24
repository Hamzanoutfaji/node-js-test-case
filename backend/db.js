import { Sequelize, DataTypes } from "sequelize";
import { MySqlDialect } from '@sequelize/mysql';

export const sequelize = new Sequelize({
    dialect: MySqlDialect,
    database: 'testdb',
    user: 'root',
    password: 'root',
    host: 'localhost',
    port:3306
});

export const User = sequelize.define(
    'User',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING
        }
    }
)
