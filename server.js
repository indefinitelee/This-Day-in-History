/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
require('dotenv').config();

const express           = require('express');
const logger            = require('morgan');
const bodyParser        = require('body-parser');
const methodOverride    = require('method-override');
const path              = require('path');
const session           = require('express-session');
const cookieParser      = require('cookie-parser');
const indexRouter       = require('./routes/index.js');
const authRouter        = require('./routes/auth');
const usersRouter       = require('./routes/users');
const searchRoute       = require('./routes/firstSearch');
const secondSearchRoute = require('./routes/secondSearch');
const bcrypt            = require('bcryptjs');

const app             = express();
const SECRET          = 'tacos3000';
const port            = process.env.PORT || process.argv[2] || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/firstSearch', searchRoute);
app.use('/secondSearch', secondSearchRoute);

app.listen(port, () => console.log('server is listening on port ', port));

