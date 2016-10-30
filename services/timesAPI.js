const fetch = require('node-fetch');

const API_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?fl=headline,byline,lead_paragraph,multimedia,web_url&';

const NYTAPI_KEY = process.env.NYT_KEY;

// initial page search
function firstSearch(req, res, next) {
  // console.log('first search function firing');
  const date = req.body.begin_date;
  const formatDate = date.split('-').join('');
  fetch(`${API_URL}begin_date=${formatDate}&end_date=${formatDate}&api-key=${NYTAPI_KEY}`)
    .then(r => r.json())
    .then((article) => {
      console.log(article);
      res.search = article.response.docs;
      $('div.search_result').text('date');
      next();
    })
    .catch((err) => {
      res.error = err;
      // console.log('Error: ', err);
      next();
    });
}

// create refine search here for signed in users only

function secondSearch(req, res, next) {
  const date = req.body.begin_date;
  const formatDate = date.split('-').join('');
  const sectionName = req.body.section_name;
  fetch(`${API_URL}begin_date=${formatDate}&end_date=${formatDate}&fq=section_name:${(sectionName)}&api-key=${NYTAPI_KEY}`)
    .then(r => r.json())
    .then((article) => {
      res.search = article;
      next();
    })
    .catch((err) => {
      res.error = err;
      next();
    });
}

module.exports = { firstSearch, secondSearch };
