// dbop.js
const config = require('./dbconf'),
         sql = require('mssql/msnodesqlv8'),
         os = require("os");

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

const firstConfig = async () => {
    const hostname = os.hostname();
    const query = `IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'MyTestDataBase')
    BEGIN
      CREATE DATABASE MyTestDataBase;
    END;`;
    
    console.log(hostname);
    let pool = sql.connect({
        server: `${hostname}\\SQLEXPRESS`,
        port: 1433,
        database: 'master',
        driver: "msnodesqlv8",
        options: {
            trustedConnection: true
        }
    }, async() => {
    try {
        console.log("Connected to database")
        let request = await pool.request().query(query)
        console.log(request)
    } catch (err) {
        console.log("Error while connecting database: " + err)
    }})
    
}

module.exports = { firstConfig, getClients }