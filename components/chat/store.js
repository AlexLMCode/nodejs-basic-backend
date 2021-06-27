const Model = require('./model');

const createChat = (users) => {

    const chat = new Model(users);
    chat.users = users;
    console.log('Users:', users);
    console.log('chat', chat);

    chat.save();


}


const showChats = (userId) => {

    return new Promise((resolve, reject) => {
        let filter = {};

        if (userId) {
            filter = {
                users: userId,
            }
        }

        Model.find(filter)
            .populate('users')
            .exec((err, populatedData) => {
                if (err) {
                    reject(err);
                    return false;
                }

                resolve(populatedData);

            })

    })

}


module.exports = {
    add: createChat,
    get: showChats
}