const configData = require('./config.json');
const os = require("os");

const hostname = os.hostname();

const config = {

        server: `${hostname}\\SQLEXPRESS`,
        port: parseInt(configData.PORT),
        database: configData.DATABASE_NAME,
        driver: "msnodesqlv8",
        options: {
            trustedConnection: true
        }
    }

module.exports = config;