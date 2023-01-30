// dbop.js
const config = require('./dbconf'),
         sql = require('mssql');

/**
 * Conecta-se ao banco de dados
 * @returns object contendo Nome e CPF dos Clients
 */
const getClients = async() => {
    try {
        let pool = await sql.connect(config);
        let clients = pool.request().query(
            "SELECT fullname,cpfid FROM Clients"
        )
        console.log(clients);
        return clients;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getClients }