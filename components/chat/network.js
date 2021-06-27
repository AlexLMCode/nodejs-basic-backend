const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();


router.get('/:userId', (req, res) => {

    controller.showChats(req.params.userId)
        .then(chats => {
            response.succes(req, res, chats, 200)
        })
        .catch(e => {
            response.error(req, res, 'Internal Error', 500, e);
        })

})

router.post('/', (req, res) => {
    // console.log(req.body.users);

    controller.createChat(req.body.users)
        .then((chat) => {
            response.succes(req, res, chat, 201);
        })
        .catch(err => {
            response.error(req, res, message, 500, err);
        })



});

module.exports = router;