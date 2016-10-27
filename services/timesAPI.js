const fetch = require('node-fetch');

const nyTimesURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

const NYTAPI_KEY = process.env.NYT_KEY;
// const end_date = begin_date;

function search(req, res, next) {
  fetch(`${nyTimesURL}?&begin_date&end_date&api-key=${NYTAPI_KEY}`)
// http://api.nytimes.com/svc/search/v2/articlesearch.json?fq=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101&api-key=####
    .then(r => r.json())
    .then((result) => {
      res.search = result;
      next();
    })
    .catch((err) => {
      res.error = err;
      next();
    });
}

module.exports = { search };
