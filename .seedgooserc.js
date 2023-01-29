// // .seedgooserc.js
module.exports = {
    modelBaseDirectory: 'app_server/models', // model directory name
    models: '**/*.js', // model matcher
    data: 'data', // data directory name
    db: 'mongodb://127.0.0.1:27017/DB-URL' // db connection url
};