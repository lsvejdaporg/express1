const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());
app.use("/soubory", express.static('public'));

const apiChat = require('./chat.js').apiChat;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/index.html"));
});
app.get('/test', (req, res) => {
    let o = {};
    o.a = "hsdjkhafkjsh";
    o.b = "bbbbb";
    o.param = req.query.pokus;
    o.param2 = req.query.bob;
    res.send(o);
});
app.post('/chat/:fn', (req, res) => {
    apiChat(req, res);
});

app.listen(3000, () => console.log('Server bezi na http://localhost:3000...'));
