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
### #Instalar morgan (ayuda a visualizar lo que se hace)
```
npm install morgan
```