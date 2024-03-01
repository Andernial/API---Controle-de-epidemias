import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const BlackListedTokenEntity = database.define('blacklistedtoken', {

    token:{
        type: DataTypes.STRING(255),
        primaryKey: true,
        unique: true,
        allowNull: false
    },

});