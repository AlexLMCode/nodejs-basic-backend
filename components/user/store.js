const Model = require('./model');

const addUser = (user) => {

    console.log(user);
    // list.push(message);
    const myUser = new Model(user);
    return myUser.save();

}

const getUsers = async (filteredUser) => {
    let filter = {};

    console.log(filteredUser);
    if (filteredUser) {
        filter = { name: filteredUser }

        try {
            const users = await Model.find(filter);
            return users;
        } catch (error) {
            console.error(error);
        }

    }

    try {
        const users = await Model.find();
        return users;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    add: addUser,
    list: getUsers,
    // remove: removeUser,
}