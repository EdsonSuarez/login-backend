const Sequelize = require('sequelize');
const UserModel = require('./users');

const sequelize = new Sequelize('Djuwlkv17D', 'Djuwlkv17D', 'iVIpoZpzf9', {
    host: 'remotemysql.com',
    port: '3306',
    dialect:  'mysql' 
  });

const User = UserModel(sequelize, Sequelize);

sequelize.sync({force: false})
  .then(() =>{
    console.log('Tablas sincronizadas');
});

module.exports = {
  User
}