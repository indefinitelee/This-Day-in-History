/* eslint no-multi-spaces: ["error", { exceptions: { "VariableDeclarator": true } }] */
/* eslint key-spacing: ["error", { align: "value" }] */
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const { searchMusic } = require('./services/itunes');

const app = express();
const port = process.env.PORT || process.argv[2] || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(logger('dev'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('_method'));


app.listen(port, () => console.log('server is listening on port ', port));

app.get('/', getFavorites, (req, res) => {
    res.render('index', {
    favorites: res.favorites || [],
    results: res.results || []
  });
});


app.post('/search', searchMusic, getFavorites, (req, res) => {
  res.render('index', {
    results: res.results || [],
    favorites: res.favorites || []
  });
});

app.post('/favorites', saveFavorites, (req, res) => {
  res.redirect('/');
});

app.delete('/favorites/:id', deleteFavorites, (req, res) => {
  res.redirect('/');
});




