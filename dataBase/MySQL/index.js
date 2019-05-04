const Sequelize = require('sequelize');
const fs = require('fs');
const resolve = require('path').resolve;
const {dbName, dbUser, dbPass} = require('../../config/mysqlShopConnect');

module.exports = (() => {
    let instance;

    function initConnection() {
        let client = new Sequelize(dbName, dbUser, dbPass, {
            host: "localhost",
            dialect: "mysql",
            operatorsAliases: false
        });
        let models = {};

        function getModels() {
            fs.readdir('./dataBase/MySQL/models', (err, files) => {
                files.forEach(file => {
                    const modelName = file.split('.')[0];
                    models[modelName] = client.import(resolve(`./dataBase/MySQL/models/${modelName}`));
                });
            });
        }

        return {
            getModel: (modelName) => models[modelName],
            setModels: () => {
                return getModels();
            }
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    }
})();
