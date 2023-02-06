const config = require('./dbconf'),
         sql = require('mssql/msnodesqlv8')

/**
 * Conecta-se ao banco de dados
 * @returns object contendo Nome e CPF dos Clients
 */
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
             bairro,
             localidade,
             uf,
             email,
             telefone,
             nascimento
            FROM Clients WHERE id = '${id}'`
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
                '${client.localidade}', 
                '${client.uf}'),
                '${client.email}'),
                '${client.telefone}'),
                '${client.nascimento}'),
                true`
        )
        return clients;
    } catch (error) {
        console.log(error);
    }
}

const firstConfig = async () => {
    
    // const query = `IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'MyTestDataBase')
    // BEGIN
    //   CREATE DATABASE MyTestDataBase;
    // END;`;

    let pool = sql.connect(config, async() => {
    try {
        console.log("Connected to database")
        // let request = await pool.request().query(query)
        // console.log(request);
        let req = await pool.request().query(`IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'salestalliondb')
        BEGIN
          CREATE DATABASE salestalliondb;
        END;`)
        const transaction = new sql.Transaction(pool);
        await transaction.begin();
        req = new sql.Request(transaction);
        await transaction.commit();
        await transaction.begin();
        await req.query(`USE salestalliondb`)
        await req.query(`CREATE TABLE Cliente (
            id int NOT NULL IDENTITY(1,1) PRIMARY KEY,
            nomecompleto VARCHAR(255) NOT NULL,
            cpf CHAR(11) NOT NULL,
            cep CHAR(8),
            numero VARCHAR(10),
            logradouro VARCHAR(255),
            complemento VARCHAR(255),
            bairro VARCHAR(100),
            localidade VARCHAR(100),
            uf CHAR(2),
            email VARCHAR(255),
            telefone VARCHAR(11),
            nascimento DATE,
            status BIT NOT NULL
        );`)
        await req.query(`CREATE TABLE Cursos (
            id int NOT NULL IDENTITY(1,1) PRIMARY KEY,
            curso VARCHAR(255) NOT NULL,
            mensalidade DECIMAL(8,2),
            taxamatricula DECIMAL(8,2),
            grau VARCHAR(20),
            status BIT NOT NULL
        );`)
        await transaction.commit();
        //await sql.close();
    } catch (err) {
        console.log("Error while connecting database: " + err)
    }})
    
}

module.exports = { firstConfig, getClient, insertClient }