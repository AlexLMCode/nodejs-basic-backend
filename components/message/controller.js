const { socket } = require('../../socket');
const store = require('./store');

const addMessage = (username, message, file) => {

    return new Promise((resolve, reject) => {

        if (!username || !message) {
            console.error('[messageController]: No hay usuario o mensaje');
            return reject('Los datos son incorrectos');
        }

        let fileUrl = '';
        if (file) {
            fileUrl = 'http://localhost:3000/app/files/' + file.filename;
        }

        const fullMessage = {
            user: username,
            message: message,
            date: new Date(),
            file: fileUrl
        }

        store.add(fullMessage);

        socket.io.emit('message', fullMessage);

        resolve(fullMessage)
    })


}

const getMessages = (filteredUser) => {

    // if(filteredUser) {

    // }

    return new Promise((resolve, reject) => {
        resolve(store.list(filteredUser))
    });
}

const updateMessage = (id, message) => {

    return new Promise(async (resolve, reject) => {

        try {
            if (!id || !message) {
                console.error('[messageController]: No hay id o mensaje');

                reject('Los datos son incorrectos');
            }

            const newMessage = await store.update(id, message);

            resolve(newMessage);
            // store.update(id, message)
            //     .then((result) => {
            //         resolve(result)
            //     });

        } catch (error) {
            console.error(error);
            reject('Algo salio mal')
        }

    })

}

const deleteMessage = (id) => {

    return new Promise((resolve, reject) => {

        if (!id) {
            reject('Parametros o ID invalido');
            return false;
        }

        store.delete(id)
            .then(() => {
                resolve();
            })
            .catch((e) => {
                reject(e);
            })

    })

}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
    deleteMessage
};