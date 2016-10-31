const express = require('express');

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('index');
});

indexRouter.get('/login', (req, res) => {
  res.render('login');
});

// This route serves your `/signup` form
indexRouter.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = indexRouter;


// app.get('/', getFavorites, (req, res) => {
//   res.render('index', {
//   favorites: res.favorites || [],
//   results: res.results || [],
//   });
// });

// app.post('/favorites', saveFavorites, (req, res) => {
//   res.redirect('/');
// });

// // app.delete('/favorites/:id', deleteFavorites, (req, res) => {
// //   res.redirect('/');
// // });
