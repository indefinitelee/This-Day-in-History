const fetch = require('node-fetch');

const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=headline,byline,lead_paragraph,multimedia,web_url&';
const NYTAPI_KEY = process.env.NYT_KEY;

// initial page search
function firstSearch(req, res, next) {
  console.log('first search function firing');
  const date = req.body.begin_date;
  const formatDate = date.split('-').join('');
  fetch(`${API_URL}begin_date=${formatDate}&end_date=${formatDate}&api-key=${NYTAPI_KEY}`)
    .then(r => r.json())
    .then((result) => {
      res.search = result;
      next();
    })
    .catch((err) => {
      res.error = err;
      console.log('Error: ', err);
      next();
    });
}

module.exports = { firstSearch };

// create refine search here
// function refineSearch(req, res, next) {
//   fetch(`$API_URL})
//     .then(r => r.json())
//     .then((result) => {
//       res.search = result;
//       next();
//     })
//     .catch((err) => {
//       res.error = err;
//       next();
//     });
// }

