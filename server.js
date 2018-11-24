const database     =   require('./database');
const express      =  require('express');
const bodyparser = require('body-parser');
var app = express()

let db = database();
let app = express();

app.set('port', process.env.PORT || 3400);

app.listen(app.get('port'), function() {
    console.log('Server running on PORT: ' + app.get('port') + ' at ' + Date(new Date()));
});