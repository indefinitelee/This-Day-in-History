const router = require('express').Router();
// const { refineSearch } = require('../services/timesAPI');

router.get('/refinesearch', (req, res) => {
  res.json(res.search);
  // res.render('refinesearch', {
  //   message: 'search page here',
  // });
});

module.exports = router;
