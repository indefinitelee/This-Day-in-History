const router = require('express').Router();
const { firstSearch } = require('../services/timesAPI');

router.get('/', (req, res) => {
  res.render('index', {
    message: 'home working',
  });
});

module.exports = router;


// router.get('/refinesearch', (req, res) => {
//   res.json(res.search);
//   // res.render('refinesearch', {
//   //   message: 'search page here',
//   // });
// });
