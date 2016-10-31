const router = require('express').Router();
const { secondSearch } = require('../services/timesAPI');

router.post('/', secondSearch, (req, res) => {
  res.render('secondSearch', {
    message: 'second search page reporty for duty',
  });
  // console.log(res.search.response.docs[0].headline.main);
});

module.exports = router;
