const express = require('express');
const app = express();
const server = require('http').Server(app);
const config = require('./config');
const cors = require('cors');

const socket = require('./socket');

const db = require('./db');
const router = require('./network/routes');


db(config.dbUrl);

app.use(cors());

app.use(express.json());

// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

socket.connect(server);
app.use(config.publicRoute, express.static('public'));
// app.use(router);
router(app);



server.listen(config.port, () => {
    console.log(`La app esta escuchando en ${config.host}:${config.port}`)
});

