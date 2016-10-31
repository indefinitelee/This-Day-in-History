const router = require('express').Router();
const { firstSearch } = require('../services/timesAPI');
const { getFavorites,
        saveFavorite,
        deleteFavorites } = require('../models/favorites');

router.post('/', firstSearch, (req, res) => {
  res.render('firstSearch', {
    user: res.user,
    results: res.search || [],
    favorites: res.favorites || [],
    date: res.date,
  });
});

router.post('/save', getFavorites, saveFavorite, (req, res) => {
  res.render('firstSearch', {
    user: res.user,
    results: res.search || [],
    favorites: res.favorites || [],
    date: res.date,
  });
});

router.delete('/delete:id', deleteFavorites, (req, res) => {
  res.render('firstSearch', {
    date: res.date,
    results: res.search || [],
    favorites: res.favorites || [],
  });
});

module.exports = router;
