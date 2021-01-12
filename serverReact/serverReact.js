const express = require('express');

const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static('src'));
app.use(express.static('src'));
app.use('/', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../src/index.js'));
});

app.listen(3000, () => {
  console.log('app is listening on port 3000')
});