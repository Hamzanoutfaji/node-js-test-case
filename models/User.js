import sequelize from "../config/db.js"
import { DataTypes } from 'sequelize';

const User = sequelize.define(
    'User',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING
        }
    },
    {
        timestamps: false
    }
)

export default User;