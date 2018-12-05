/**
* Server configuration.
* Created by Kudzai Gopfa on 3/5/2017.
* MIT Licensed
*/

'use strict'

/**
* Module dependencies
*/

const database		= require('./database');
const express		= require('express');
const bodyParser 	= require('body-parser');

let db = database();
let app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('port', process.env.PORT || 3400);


app.listen(app.get('port'), function() {
	console.log('Server running on PORT: ' + app.get('port') + ' at ' + Date(new Date()));
});