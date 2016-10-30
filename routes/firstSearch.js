const router = require('express').Router();
const { firstSearch } = require('../services/timesAPI');
const { getFavorites } = require('../models/favorites');

router.post('/', firstSearch, getFavorites, (req, res) => {
  res.render('firstSearch', {
    results: res.search || [],
    favorites: res.favorites || [],
    date: res.date,
  });
});

module.exports = router;
