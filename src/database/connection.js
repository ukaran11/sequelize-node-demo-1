const Sequelize = require('sequelize');

const sequelize = new Sequelize('socialnetwork', 'root', 'root' , {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false
});

module.exports = sequelize;
global.sequelize = sequelize;

// sequelize migration:create --name create_tweets_table

// sequelize db:migrate

// sequelize migration:create --name create_users_table

// sequelize db:migrate:undo

