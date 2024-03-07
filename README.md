# Api controle de epidemias - (documentação em progresso)
tecnologias utilizadas:
node, express, cors, nodemon,jsonwebtoken,sequelize 
## Para iniciar
Conecte o Sequelize com o servidor de sua preferência 
```
const sequelize = new Sequelize("db_controle", "root", "1234", {
    host: "localhost",
    dialect: "mysql"
});
```
nesse caso será necessario criar um novo banco de dados.

### Para utilizar as rotas 

As rotas utilizam verificações de token jwt, para acessá las será necessário enviar um token válido que é dado como retorno na rota de login de adm.

A api não permite cadastrar um adm sem ter um já cadastrado no banco de dados por motivos de segurança, então antes de tudo adicione um manualmente um adm no banco de dados.

remova a função "verifyJwt" da rota de registrar adm para cadastrar o primeiro adm, depois de criado a função pode voltar para rota.
```
admRouter.post('/register', verifyJwt, registerAdm)
```

