import { Sequelize } from "sequelize";


                                 // nome provisório               
const sequelize = new Sequelize("db_controle", "root", "1234", {
    host: "localhost",
    dialect: "mysql"
});

// sequelize.query("DROP TABLE relatosDeCasos").then(console.log("tabela apagada com sucesso"))
// .catch(er=> console.error('não foi possível apagar a tabela',er))
//  sequelize.query("DROP TABLE relatosDeCasos")
//  .then(console.log("Tabela apagada com sucesso!"))
//  .catch(er => console.error(er))

const testConnection = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexão bem sucedida!')
    } catch (error) {
        console.log(`conexão mal sucedida ${error}`)
    }
};

export { testConnection, sequelize }

//.
