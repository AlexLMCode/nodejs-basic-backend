const config = {
    dbUrl: process.env.DBURL || 'mongodb+srv://db_user_alexnode:Gooda2412@cluster0.pysho.mongodb.net/messages_node_db',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app'
}

module.exports = config;