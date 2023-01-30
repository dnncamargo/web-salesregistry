const express = require('express');

const API_PORT = process.env.PORT || 5000;

const app = express();

app.get('/create', (req, res) => {
    console.log("api called"); // resposta no terminal
    res.send({result: "Answer from backend"});
})

const dbop = require('./utils/dbop');
dbop.getClients()
.then(res => {
    console.log(res.recordset)
})

app.listen(API_PORT, () => {
    console.log(`Server started on port ${API_PORT}`);
});