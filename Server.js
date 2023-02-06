const express = require('express');
const bp = require('body-parser')
const dbop = require('./utils/dbop')

const API_PORT = process.env.PORT || 5000;

const app = express();
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

//dbop.firstConfig();

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

app.listen(API_PORT, () => {
    console.log(`Server started on port ${API_PORT}`);
});