const router = require('express').Router();
const { firstSearch } = require('../services/timesAPI');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

router.post('/', firstSearch, (req, res) => {
  res.render('firstSearch', {
    results: res.search || [],
    favorites: res.favorites || [],
    date: res.date,
  });
});

router.post('/save', getFavorites, saveFavorite, (req, res) => {
  res.render('firstSearch', {
    results: res.search || [],
    favorites: res.favorites || [],
    date: res.date,
  });
});

router.post('/delete', deleteFavorites, (req, res) => {
  res.render('firstSearch', {

  });
});

module.exports = router;
