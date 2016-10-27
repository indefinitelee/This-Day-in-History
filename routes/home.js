const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index', {
    message: 'home working',
  });
});

module.exports = router;

