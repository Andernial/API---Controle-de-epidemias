import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const DiretrizesProfissionaisEntity = database.define('diretrizes', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
   
    nameEpidemy:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    description:{
        type: DataTypes.STRING(255),
        allowNull: false
    },

    urlInfo:{
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
    },

    data:{
        type: DataTypes.STRING(10),
        allowNull: false
    },

  
});