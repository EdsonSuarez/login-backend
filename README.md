# Conexion servidor Login-backend
### Instalacion de npm
```
npm init -y
```
### Instalacion de  express
```
npm install express --save
```
### Instalacion nodemon (es para tener un servidor local mas sencillo)
```
npm install --save-dev nodemon
```
#### se coloca esto en package.json 
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index"
  } 

```
### y se inicia con el comando en el terminal
```
npm run dev
```
### Instalar morgan (ayuda a visualizar lo que se hace)
```
npm install morgan
```
## conectar con la base de datos mysqlnpm install 
### instalar sequelize 
``` 
npm install --save sequelize
```
### instalacion de bcryptjs 
es para manejar las claves encriptadas
```
$ npm i bcryptjs
```
### tocó instalar mysql2
```
npm install mysql2
```
### instalacion body-parser
es para la estructura de los json (express tambien tiene uno)
```
$ npm install body-parser
```