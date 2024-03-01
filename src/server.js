import express from "express";
import { testConnection } from "./database/connection.js";
import { routes } from "./routes/index.routes.js";
const app = express();
const port = 4000;


app.use(express.json());
app.use(routes)

app.listen(port, ()=>{

    testConnection()
    console.log(`servidor rodando na porta ${port}`)
});