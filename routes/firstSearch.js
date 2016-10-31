const router = require('express').Router();


const { firstSearch } = require('../services/timesAPI');
const { getFavorites,
        saveFavorites,
        deleteFavorites } = require('../models/favorites');

router.post('/', firstSearch, getFavorites, (req, res) => {
  res.render('firstSearch', {
    results: res.search || [],
    favorites: res.favorites || [],
    date: res.date,
  });
});

module.exports = router;
