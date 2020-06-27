const mongoose = require('mongoose');
const url = 'mongodb://localhost/planillaDb';

mongoose.connect(url)
    mongoose.Promise = global.Promise;

module.exports = mongoose;    