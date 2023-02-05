const configData = require('./config.json');

const config = {

    user: configData.USERNAME,
    password: configData.PASSWORD,
    server: configData.SERVER_URL,
    database: configData.DATABASE_NAME,
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: configData.INSTANCE_NAME
    },
    port: parseInt(configData.PORT)
}

module.exports = config;