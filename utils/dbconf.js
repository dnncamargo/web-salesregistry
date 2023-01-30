const config = {
    user: 'nodejs',
    password: 'nodejs',
    server: 'S145-TORT6N07',
    database: 'salestalliondb',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'MSSQLSERVER'
    },
    port: 1433,
}

module.exports = config;