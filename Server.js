const express = require('express');
const bp = require('body-parser')
const dbop = require('./utils/dbop')

const API_PORT = process.env.PORT || 5000;

const client = {
    nomecompleto: 'Márcia Mariane Galvão',
    cpf: '76197879760',
    cep: '24936255',
    logradouro: 'Rua Seis',
    numero: '419',
    complemento: '',
    localidade: 'Maricá',
    uf: 'RJ',
    bairro: 'Barroco (Itaipuaçu)'
    }

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.post('/create', async (req, res) => {
    console.log("received from front:", req.body);
    await dbop.insertClient(req.body);
    console.log("inserted resolve");
    const resultquery = await dbop.getClient(req.body.id);
    res.send(resultquery.recordset);
})

app.post('/fetch', async (req, res) => {
    const resultquery = await dbop.getClient(req.body.cpf);
    res.send(resultquery.recordset);
});



// dbop.insertClient(client)

// dbop.getClient(6)
// .then(res => {
//     console.log(res.recordset)
// })



app.listen(API_PORT, () => {
    console.log(`Server started on port ${API_PORT}`);
});