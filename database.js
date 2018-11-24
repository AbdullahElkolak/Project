const mongoose    =  require('mongoose');

module.exports = function() {
    var db = mongoose.createConnection('mongodb://localhost:27017/project', { useNewUrlParser: true }); 

    require('./users.database');
}
 