const router = require('express').Router();
const { firstSearch } = require('../services/timesAPI');

router.post('/', firstSearch, (req, res) => {
  console.log(res.search[0].headline.main);
  res.render('firstSearch', {
    results: res.search || [],
    message: ' first search results page here',
  });
});

module.exports = router;
