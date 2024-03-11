# Api controle de epidemias - (documentação em progresso)
## 👾Tecnologias utilizadas
node, express, cors, nodemon,jsonwebtoken,sequelize 

## 📚Descrição
A API controle de epidemias foi desenvolvida em JavaScript/Node.js, nesta api pode ser encontrado diversos recursos e ferramentas destinadas a auxiliar profissionais da saúde a controlar epidemias. Oferece támbem um sistema de verificação de admnistradores feito com a biblioteca Jason Web Token.

A API utiliza express para o roteamento e manipulação de requisições HTTP.

Devido a orm sequelize o usuario pode conectar o banco de dados de sua preferência.

## ➡️Atualização mais Recente 

Versão 0.0.1 -> Release Update


## ⚙️Configuração do Ambiente

Conecte o Sequelize com o banco de dados de sua preferência 
```
const sequelize = new Sequelize("db_controle", "root", "1234", {
    host: "localhost",
    dialect: "mysql"
});
```
nesse caso será necessario criar um novo banco de dados.


## 📫Endpoints

### Criação de ADM

- **Endpoint**: `/api/adm/register`
- **Método HTTP**: POST
- **Descrição**: Cria um novo ADM e gera um token JWT que pode ser usado em recursos protegidos.

#### Headers para requisição
- `x-acess-token`: é necessario um 'x-acess-token' de um ADM logado para executar essa requisição.

#### Parâmetros de Requisição
- `name`: O nome do admnistrador.
- `password`: A senha do admnistrador.


#### Exemplo de Requisição

```json
POST /api/adm/register
Headers x-acess-token = 'token gerado com login'
{
	"name":"nome",
	"password":"12345"
}
```
#### Resposta

```json
{
	"message": "adm criado com sucesso!",
	"adm": {
		"id": "b35eed71-6e88-4940-903f-6ab16babfd6f",
		"name": "nome",
		"password": "12345",
		"updatedAt": "2024-03-11T16:33:42.759Z",
		"createdAt": "2024-03-11T16:33:42.759Z"
	}
}
```

### Login de ADM

- **Endpoint**: `/api/adm/login`
- **Método HTTP**: GET
- **Descrição**: Autentica um ADM e gera um token JWT que pode ser usado em recursos protegidos.

#### Parâmetros de Requisição
- `name`: O nome do admnistrador.
- `password`: A senha do admnistrador.


#### Exemplo de Requisição

```json
POST /api/adm/register

{
	"name":"nome",
	"password":"12345"
}
```
#### Resposta

```json
{
{
	"message": "logado com sucesso",
	"adm": {
		"auth": true,
		"token": "token gerado"
	}
}
}
```

### Logout de ADM

- **Endpoint**: `/api/adm/logout`
- **Método HTTP**: POST
- **Descrição**: Encerra a seção do ADM, invalidando também o token JWT.

#### Headers para requisição
- `x-acess-token`: é necessario um 'x-acess-token' de um ADM logado para executar essa requisição.

#### Exemplo de Requisição

```json
POST /api/adm/logout
Headers x-acess-token = 'token gerado com login'
```

#### Resposta


```json
{
	"message": "token atualizado com sucesso!",
	"BlackListedToken": {
		"token": "Token enviado na requisição",
		"updatedAt": "2024-03-11T16:44:38.694Z",
		"createdAt": "2024-03-11T16:44:38.694Z"
	}
}
```

### Adicionando Notícia 

- **Endpoint**: `/api/noticias/create`
- **Método HTTP**: POST
- **Descrição**: Adiciona notícia no banco de dados.

#### Headers para requisição
- `x-acess-token`: é necessario um 'x-acess-token' de um ADM logado para executar essa requisição.


#### Parâmetros de Requisição
- `title`: título para notícia
- `nameEpidemy`: nome da epidemia referida na notícia 
- `description`: descrição da notícia
- `urlNews`: url da notícia
- `data`: data da notícia 

#### Exemplo de Requisição

```json
POST /api/noticias/create
Headers x-acess-token = 'token gerado com login'
{
		"title": "titulo",
		"nameEpidemy": "epidemia",
		"description": "teste",
	    "urlNews": "teste",
		"data": "teste"
	
}
```

#### Resposta


```json
{
	"newNews": {
		"message": "Notícia criado com sucesso!",
		"noticia": {
			"id": "número de acordo com auto_increment",
			"title": "titulo",
		    "nameEpidemy": "epidemia",
		    "description": "teste",
	        "urlNews": "teste",
		    "data": "teste",
			"updatedAt": "2024-03-07T16:03:05.509Z",
			"createdAt": "2024-03-07T16:03:05.509Z"
		}
	}
}
```

### Trazendo Todas As Notícias 

- **Endpoint**: `/api/noticias/show-all`
- **Método HTTP**: GET
- **Descrição**: Traz todas as notícias do banco de dados.



#### Exemplo de Requisição

```json
POST /api/noticias/show-all
```

#### Resposta


```json
{
	"news": [
		{
			"id": "número de acordo com auto_increment",
			"title": "titulo",
		    "nameEpidemy": "epidemia",
		    "description": "teste",
	        "urlNews": "teste",
		    "data": "teste",
			"updatedAt": "2024-03-07T16:03:05.509Z",
			"createdAt": "2024-03-07T16:03:05.509Z"
		},
		{
		    "id": "número de acordo com auto_increment",
			"title": "titulo",
		    "nameEpidemy": "epidemia",
		    "description": "teste",
	        "urlNews": "teste",
		    "data": "teste",
			"updatedAt": "2024-03-07T16:03:05.509Z",
			"createdAt": "2024-03-07T16:03:05.509Z"
		}
	]
}
```

### Trazendo Notícia Por Query

- **Endpoint**: `/api/noticias/show-by`
- **Método HTTP**: GET
- **Descrição**: Traz notícias do banco de dados de acordo com a query especificada na requisição.

#### Querys de requisição
- `title`: título para notícia
- `nameEpidemy`: nome da epidemia referida na notícia 
- `description`: descrição da notícia
- `urlNews`: url da notícia
- `data`: data da notícia 


#### Exemplo de Requisição

```json
POST /api/noticias/show-by?title=teste&nameEpidemy=teste

```

#### Resposta


```json
{
	"news": [
		{
			"id": "número de acordo com auto_increment",
			"title": "titulo",
		    "nameEpidemy": "teste",
		    "description": "teste",
	        "urlNews": "teste",
		    "data": "teste",
			"updatedAt": "2024-03-07T16:03:05.509Z",
			"createdAt": "2024-03-07T16:03:05.509Z"
		}
	]
}
```

### Atualizando Notícia 

- **Endpoint**: `/api/noticias/update-by/:id`
- **Método HTTP**: PUT
- **Descrição**: Atualiza uma noticia de acordo com as querys passadas na requisição.

#### Headers para requisição
- `x-acess-token`: é necessario um 'x-acess-token' de um ADM logado para executar essa requisição.


#### Querys de requisição
- `title`: título para notícia
- `nameEpidemy`: nome da epidemia referida na notícia 
- `description`: descrição da notícia
- `urlNews`: url da notícia
- `data`: data da notícia 


#### Exemplo de Requisição

```json
POST /api/noticias/update-by/:id?title=teste&nameEpidemy=teste

```

#### Resposta


```json
{
	"news": [
		{
			"id": "número de acordo com auto_increment",
			"title": "titulo",
		    "nameEpidemy": "teste",
		    "description": "teste",
	        "urlNews": "teste",
		    "data": "teste",
			"updatedAt": "2024-03-07T16:03:05.509Z",
			"createdAt": "2024-03-07T16:03:05.509Z"
		}
	]
}
```

### Deletando Notícia 

- **Endpoint**: `/api/noticias/delete/:id`
- **Método HTTP**: DELETE
- **Descrição**: Atualiza uma noticia de acordo com as querys passadas na requisição.

#### Headers para requisição
- `x-acess-token`: é necessario um 'x-acess-token' de um ADM logado para executar essa requisição.



#### Exemplo de Requisição

```json
POST /api/noticias/delete/:id

```

#### Resposta


```json
{
	"message": "notícia deletado com sucesso!"
}
```


## ❓FAQ

### 🖱️Para utilizar as rotas 

As rotas utilizam verificações de token jwt, para acessá las será necessário enviar um token válido que é dado como retorno na rota de login de adm.

A api não permite cadastrar um adm sem ter um já cadastrado no banco de dados por motivos de segurança, então antes de tudo adicione um manualmente um adm no banco de dados.

remova a função "verifyJwt" da rota de registrar adm para cadastrar o primeiro adm, depois de criado a função pode voltar para rota.
```
admRouter.post('/register', verifyJwt, registerAdm)
```

