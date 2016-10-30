const router = require('express').Router();
const { firstSearch } = require('../services/timesAPI');

router.post('/', firstSearch, (req, res) => {
  res.render('firstSearch', {
    message: ' first search results page here',
  });
  console.log(res.search.response.docs[0].headline.main);
});

module.exports = router;
