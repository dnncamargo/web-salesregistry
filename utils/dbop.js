// dbop.js
const config = require('./dbconf'),
         sql = require('mssql');

/**
 * Conecta-se ao banco de dados
 * @returns object contendo Nome e CPF dos Clients
 */
const getClient = async(id) => {
    try {
        let pool = await sql.connect(config);
        let clients = await pool.request().query(
            `SELECT nomecompleto,
             cpf,
             cep,
             numero,
             logradouro,
             complemento,
             localidade,
             uf,
             city FROM Clients WHERE id = '${id}'`
        ) 
        return clients;
    } catch (error) {
        console.log(error);
    }
}

const insertClient = async (client) => {
    try {
        let pool = await sql.connect(config);
        let clients = await pool.request().query(
            `INSERT INTO Clients VALUES (
                '${client.nomecompleto}', 
                '${client.cpf}', 
                '${client.cep}', 
                '${client.numero}', 
                '${client.logradouro}', 
                '${client.complemento}', 
                '${client.bairro}', 
                '${client.uf}', 
                '${client.localidade}')`
        )
        return clients;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getClient, insertClient }