import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const NoticiaEntity = database.define('noticia', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },

    title:{
        type: DataTypes.STRING(20),
        unique: true,
        allowNull: false
    },

    nameEpidemy:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    description:{
        type: DataTypes.STRING(255),
        allowNull: false
    },

    urlNews:{
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },

    data:{
        type: DataTypes.STRING(10),
        allowNull: false
    }
});