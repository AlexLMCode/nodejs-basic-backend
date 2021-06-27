const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', (req, res) => {
    controller.addUser(req.body.name)
        .then((data) => {
            response.succes(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal Error', 500, err);
        })
});

router.get('/', (req, res) => {
    // console.log(req.headers);
    // res.header({
    //     "custom-header": "Nuestro valor personalizado"
    // }) Cabeceras personalizadas 

    // console.log(req.body);
    // res.send('Lista de mensajes')

    const filteredUser = req.query.name || null;

    controller.getUser(filteredUser)
        .then((usersList) => {
            response.succes(req, res, usersList, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })

})

module.exports = router;