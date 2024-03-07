import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const NoticiaEntity = database.define('noticia', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },

    title:{
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },

    nameEpidemy:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    description:{
        type: DataTypes.TEXT('long'),
        allowNull: false
    },

    urlNews:{
        type: DataTypes.STRING(255),
        unique: true,
        allowNull: false
    },

    data:{
        type: DataTypes.STRING(11),
        allowNull: false
    }
});