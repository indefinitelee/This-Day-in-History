// from iTunes user auth bu bobby king aka @gittheking

const MongoClient = require('mongodb');

// process.env.MONGOLAB_URI is DEPRECATED
// process.env.MONGODB_URI is needed for when we deploy to Heroku
const connectionURL = process.env.MONGODB_URI || 'mongodb://localhost/thisday_____';

function getDB() {
  return MongoClient.connect(connectionURL);
}

module.exports = {
  getDB,
};
