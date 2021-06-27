const store = require('./store');

const addUser = (name) => {

    if (!name) {
        return Promise.reject('Invalid Name');
    }

    const user = {
        name: name
    }

    return store.add(user)
};

const getUser = (filteredUser) => {
    return new Promise((resolve, reject) => {
        resolve(store.list(filteredUser))
    });
}


module.exports = {
    addUser,
    getUser
}