const store = require('./store');

const createChat = (users) => {

    return new Promise((resolve, reject) => {

        if (!users || Array.isArray(users)) {
            console.error('[messageController]: No hay usuarios');
            return reject('Los datos son incorrectos');
        }

        // let usersId = [];

        // for (let index = 0; index < users.length; index++) {
        //     const tempUser = users[index];
        //     usersId.push(tempUser);
        // }

        const chat = {
            users: users,
        }

        store.add(chat);
        resolve(users);
    })

}


const showChats = (userId) => {
    return store.get(userId);
}


module.exports = {
    createChat,
    showChats
}