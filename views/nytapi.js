//   <% res.search.forEach((results) => { %>
//   <div class="first-search-results">
//     <p> <%= res.search.response.docs.[0].headline.main %> </p>
//     <p> <%= res.search.response.docs.original %> </p>
//     <p> <img src="<%= res.search.response.docs.[2].url %>"> </p>
//     <p> <%= res.search.response.docs.[4] %> </p>
//   </div>
//   <% }) %>

// headline: response.docs.[0].headline.main
// byline: response.docs.original
// image: response.docs.[2].url
// web_url: response.docs[4]

// {
//   "response": {
//     "meta": {
//       "hits": 389,
//       "time": 48,
//       "offset": 0
//     },
//     "docs": [
//       {
//         "headline": {
//           "main": "The Definitive Guide to Cord-Cutting in 2016, Based on Your Habits",
//           "kicker": "Tech Fix"
//         },
//         "byline": {
//           "person": [
//             {
//               "firstname": "Brian",
//               "middlename": "X.",
//               "lastname": "CHEN",
//               "rank": 1,
//               "role": "reported",
//               "organization": ""
//             }
//           ],
//           "original": "By BRIAN X. CHEN"
//         },
//         "lead_paragraph": "We teamed up with The Wirecutter to come up with cord-cutter bundles for movie buffs, sports addicts, fans of premium TV shows, binge watchers and families with children.",
//         "multimedia": [
//           {
//             "width": 190,
//             "url": "images/2016/10/13/business/13TECHFIX/06TECHFIX-thumbWide.jpg",
//             "height": 126,
//             "subtype": "wide",
//             "legacy": {
//               "wide": "images/2016/10/13/business/13TECHFIX/06TECHFIX-thumbWide.jpg",
//               "wideheight": "126",
//               "widewidth": "190"
//             },
//             "type": "image"
//           },
//           {
//             "width": 600,
//             "url": "images/2016/10/13/business/13TECHFIX/06TECHFIX-articleLarge.jpg",
//             "height": 346,
//             "subtype": "xlarge",
//             "legacy": {
//               "xlargewidth": "600",
//               "xlarge": "images/2016/10/13/business/13TECHFIX/06TECHFIX-articleLarge.jpg",
//               "xlargeheight": "346"
//             },
//             "type": "image"
//           },
//           {
//             "width": 75,
//             "url": "images/2016/10/13/business/13TECHFIX/06TECHFIX-thumbStandard.jpg",
//             "height": 75,
//             "subtype": "thumbnail",
//             "legacy": {
//               "thumbnailheight": "75",
//               "thumbnail": "images/2016/10/13/business/13TECHFIX/06TECHFIX-thumbStandard.jpg",
//               "thumbnailwidth": "75"
//             },
//             "type": "image"
//           }
//         ],
//         "web_url": "http://www.nytimes.com/interactive/2016/technology/personaltech/cord-cutting-guide.html"
//       },
//       {
//         "headline": {
//           "main": "Donald Trump’s Taxes: What We Know and Don’t Know"
//         },
//         "byline": {
//           "person": [
//             {
//               "organization": "",
//               "role": "reported",
//               "firstname": "Steve",
//               "rank": 1,
//               "lastname": "EDER"
//             },
//             {
//               "organization": "",
//               "role": "reported",
//               "firstname": "Patricia",
//               "rank": 2,
//               "lastname": "COHEN"
//             }
//           ],
//           "original": "By STEVE EDER and PATRICIA COHEN"
//         },
//         "lead_paragraph": "In the absence of any disclosures from Mr. Trump, The New York Times and other news outlets have attempted to fill in the gaps.",
//         "multimedia": [
//           {
//             "width": 190,
//             "url": "images/2016/10/01/us/02TRUMPTAXES-listy/02TRUMPTAXES-listy-thumbWide.jpg",
//             "height": 126,
//             "subtype": "wide",
//             "legacy": {
//               "wide": "images/2016/10/01/us/02TRUMPTAXES-listy/02TRUMPTAXES-listy-thumbWide.jpg",
//               "wideheight": "126",
//               "widewidth": "190"
//             },
//             "type": "image"
//           },
//           {
//             "width": 600,
//             "url": "images/2016/10/01/us/02TRUMPTAXES-listy/02TRUMPTAXES-listy-articleLarge.jpg",
//             "height": 401,
//             "subtype": "xlarge",
//             "legacy": {
//               "xlargewidth": "600",
//               "xlarge": "images/2016/10/01/us/02TRUMPTAXES-listy/02TRUMPTAXES-listy-articleLarge.jpg",
//               "xlargeheight": "401"
//             },
//             "type": "image"
//           },
//           {
//             "width": 75,
//             "url": "images/2016/10/01/us/02TRUMPTAXES-listy/02TRUMPTAXES-listy-thumbStandard.jpg",
//             "height": 75,
//             "subtype": "thumbnail",
//             "legacy": {
//               "thumbnailheight": "75",
//               "thumbnail": "images/2016/10/01/us/02TRUMPTAXES-listy/02TRUMPTAXES-listy-thumbStandard.jpg",
//               "thumbnailwidth": "75"
//             },
//             "type": "image"
//           }
//         ],
//         "web_url": "http://www.nytimes.com/interactive/2016/us/politics/donald-trump-taxes-explained.html"
//       },
// }
// }
