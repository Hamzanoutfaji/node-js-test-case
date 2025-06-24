import sequelize from "../config/db.js"
import { DataTypes } from 'sequelize';

const User = sequelize.define(
    'User',
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
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

export default User;