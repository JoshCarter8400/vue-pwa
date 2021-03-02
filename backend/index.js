/* 
    Dependencies
*/

const express = require('express');

/* 
    Config - express
*/
const app = express();
// const port = 3000;

/* 
    Endpoint - posts
*/

app.get('/posts', (req, res) => {
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
  res.send(posts);
});

/* 
    Listen
*/
app.listen(process.env.PORT || 3000);
