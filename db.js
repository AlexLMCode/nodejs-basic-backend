const db = require('mongoose');
db.Promise = global.Promise;

const connect = async (url) => {
    // 'mongodb+srv://db_user_alexnode:Gooda2412@cluster0.pysho.mongodb.net/messages_node_db'
    await db.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('[db] Connected!');
}

module.exports = connect;

