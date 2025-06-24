import { Sequelize } from "sequelize";

const sequelize = new Sequelize('testdb', 'root', 'root',{
    host: 'localhost',
    port:3306,
    dialect: "mysql",
});
export default sequelize;
