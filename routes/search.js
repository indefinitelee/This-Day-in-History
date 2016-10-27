const router = require('express').Router();
const { search } = require('../services/timesAPI');

router.get('/', (req, res) => {
  res.render('search', {
    message: 'search page here',
  });
});

module.exports = router;
