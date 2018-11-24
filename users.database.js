const mongoose   =  require('mongoose');
const Schema     =  mongoose.Schema;

let UserSchema = new Schema({
    firstname: String,
    lastname: String,
    username: String,
    password: String,
    created: Date
});

mongoose.model('Users', UserSchema);