import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const AdmEntity = database.define('adm', {
    id: {
        type: DataTypes.UUID,
        defaultValue: database.Sequelize.UUIDV4,
        primaryKey:true
    },

    name:{
        type: DataTypes.STRING(9),
        unique: true,
        allowNull: false
    },

    password:{
        type: DataTypes.STRING(32),
        allowNull:false
    }
});