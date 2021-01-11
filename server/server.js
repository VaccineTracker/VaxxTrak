const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('client'));

app.listen(3000);