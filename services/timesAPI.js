const fetch = require('node-fetch');

const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=headline,byline,lead_paragraph,multimedia,web_url&';

const NYTAPI_KEY = process.env.NYT_KEY;

// initial page search
function firstSearch(req, res, next) {
  // console.log(req.query.begin_date);
  console.log('first search function firing');
  fetch(`${API_URL}begin_date=${req.query.begin_date}&api-key=${NYTAPI_KEY}`)
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

module.exports = { firstSearch };

// create refine search here
