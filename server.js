/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const homeRoute = require('./routes/home');
const searchRoute = require('./routes/search');

const app = express();
const port = process.env.PORT || process.argv[2] || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride('_method'));

app.use('/', homeRoute);
app.use('/search', searchRoute);

app.listen(port, () => console.log('server is listening on port ', port));
