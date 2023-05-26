const express = require('express');

const mainRoute = require('./routes/mainRoute');
const articlesRoute = require('./routes/articlesRoute');
const authorsRoute = require('./routes/authorsRoute');

const server = express();

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(express.static(__dirname + '/public'));

server.use('/', mainRoute);
server.use('/', articlesRoute);
server.use('/', authorsRoute);


server.listen(4000);