import { DataTypes } from "sequelize";
import { sequelize as database } from "../database/connection.js";

export const RelatosEntity = database.define("relatosDeCasos", {


    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },

    name:{
        type: DataTypes.STRING(40),
        allowNull: false,
        unique: true
    },

    nameEpidemy:{
        type: DataTypes.STRING(20),
        allowNull: false
    },

    caseDescription:{
        type: DataTypes.STRING(255),
        allowNull: false
    },

    email:{
        type: DataTypes.STRING(100),
        allowNull: false
    },

    data:{
        type: DataTypes.STRING(10),
        allowNull: false
    },

    nameState: {
        type: DataTypes.STRING(2),
        allowNull: false            
    },

    localName:{
    localName:{ 
        type: DataTypes.STRING(255),
        allowNull: false    
    },

    CPF:{
        type: DataTypes.STRING(255),
        type: DataTypes.STRING(11),
        allowNull: false    
    }

}

    //nome,nameEpidemy,Casedescription,email,data,nameState,localName,CPF;