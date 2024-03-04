import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const InformacoesPorLocalEntity = database.define('informacoesPorLocal', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },

    nameState: {
        type: DataTypes.STRING(2),
        allowNull: false,         
    },

    localName:{
        type: DataTypes.STRING(100),
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

    numberOfCases:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    numberOfPossibleCases:{
        type: DataTypes.INTEGER,
        allowNull:false
    },

    numberOfFatalities:{
        type: DataTypes.INTEGER,
        allowNull: false
    },

    urlInfoLocations:{
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: true
    },
    
    data:{
        type: DataTypes.STRING(10),
        allowNull: false
    }
});



