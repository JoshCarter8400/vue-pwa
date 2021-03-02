const functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.posts = functions.https.onRequest((request, response) => {
  let posts = [
    {
      caption: 'Golden Gate Bridge',
      location: 'San Francisco',
    },
    {
      caption: 'London Eye',
      location: 'London, UK',
    },
  ];
  response.send(posts);
});
