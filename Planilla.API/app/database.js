const mongoose = require('mongoose');
const url = 'mongodb://localhost/planillaDb';

mongoose.connect(url)
    .then(db => console.log('Db esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;    