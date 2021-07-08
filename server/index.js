const express = require('express');
const app = express();
const url = require('url');
const Quote = require('../database/quote.js');
const db = require('../database/index.js');

const port = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(__dirname + '/../public'))
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const newQuote = new Quote({
  fullName: 'John',
  quote: 'Never attack slowly',
  date: 'October 31st, 1808',
  rank: 'Colonel of 18th Battery',
  source: 'Book number 2'

})

newQuote.save().then((saved) => {
  console.log('Saved to database: ', saved);
}).catch((err) => {
  console.log('Error! ', err);
})

app.get('/quote', (req, res) => {
  console.log('Quote get!');
  Quote.count().exec((err, count) => {
    var random = Math.floor(Math.random() * count);
    Quote.findOne().skip(random).exec((err, result) => {
      console.log('Random quote!', result);
      res.set('Access-Control-Allow-Origin': ['*']);
      res.send(result);
    })
  })
})

app.post('/quote', (req, res) => {
  let data = req.body;
  console.log('Req from post to quote: ', req);
})

app.listen(port, () => {
  console.log('listening on port: ', port);
});