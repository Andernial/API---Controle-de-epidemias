import express from "express";
import { testConnection } from "./database/connection.js";
const app = express();
const port = 4000;


app.use(express.json());

app.listen(port, ()=>{
    
    testConnection()
    console.log(`servidor rodando na porta ${port}`)
});