const router = require('express').Router();
const { firstSearch } = require('../services/timesAPI');

router.post('/', firstSearch, (req, res) => {
  res.render('refinesearch', {
    message: 'search page here',
  });
  console.log(res.search.response.docs[0].headline.main);
  // res.redirect('/');
});

module.exports = router;
