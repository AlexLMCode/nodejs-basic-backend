const express = require('express');
const multer = require('multer');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'uploads/',

});

router.get('/', (req, res) => {
    // console.log(req.headers);
    // res.header({
    //     "custom-header": "Nuestro valor personalizado"
    // }) Cabeceras personalizadas 

    // console.log(req.body);
    // res.send('Lista de mensajes')

    const filteredMessage = req.query.user || null;

    controller.getMessages(filteredMessage)
        .then((messageList) => {
            response.succes(req, res, messageList, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Unexpected Error', 500, e)
        })

})

router.post('/', upload.single('file'), (req, res) => {

    console.log(req.file);

    controller.addMessage(req.body.username, req.body.message)
        .then((fullMessage) => {
            response.succes(req, res, fullMessage, 201)
        })
        .catch(() => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador')
        })

    // if (req.query.error == 'ok') {
    //     response.error(req, res, 'Error innesperado', 500, 'Es solo una simulacion')

    // } else {
    //     response.succes(req, res, 'Creado Correctamente', 201)

    // }
});


router.delete('/:id', (req, res) => {
    // console.log(req.query);
    // response.succes(req, res, 'Eliminado correctamente')
    // res.send('Mensaje eliminado');
    // res.status(201).send({ error: '', body: 'Creado correctamente' })

    const id = req.params.id;

    controller.deleteMessage(id)
        .then((message) => {
            response.succes(req, res, `Usuario ${id} eliminado`, 201);
        })
        .catch((e) => {
            response.error(req, res, 'Error interno', 500, e)
        })

});

router.patch('/:id', (req, res) => {
    // console.log(req.params.id, req.body.message);
    const message = req.body.message;
    const id = req.params.id;

    controller.updateMessage(id, message)
        .then((data) => {
            response.succes(req, res, data, 200);
        })
        .catch((e) => {
            response.error(req, res, 'Algo salio mal xd', 500, e);
        });

})

module.exports = router;