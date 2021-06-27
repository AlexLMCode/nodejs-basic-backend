const Model = require('./model');

const addMessage = (message) => {
    console.log(message);
    // list.push(message);
    const myMessage = new Model(message);
    myMessage.save();
};

const getMessage = (filteredUser) => {

    return new Promise((resolve, reject) => {

        let filter = {};

        if (filteredUser) {
            filter = { user: filteredUser };


        }

        Model.find(filter)
            .populate('user')
            .exec((err, populatedData) => {
                if (err) {
                    reject(err);
                    return false;
                }
                resolve(populatedData)
            })

        // const messages = Model.find()
        //     .catch(e => {
        //         reject(e)
        //     })
        // return resolve(messages);

    })


};

const updateMessage = async (id, message) => {

    try {

        const db_message = await Model.findOne({
            _id: id
        }, (err, message) => {
            if (err) {
                console.error('NO SE ENCONTRO!!');
            } else {
                console.log(message);
            }
        });

        db_message.message = message;

        const newMessage = await db_message.save();
        return newMessage;

    } catch (e) {
        console.error('[storeError]: no se xd', e);
    }

}

const deleteMessage = (id) => {

    return Model.deleteOne({ _id: id });

}

module.exports = {
    add: addMessage,
    list: getMessage,
    update: updateMessage,
    delete: deleteMessage
}