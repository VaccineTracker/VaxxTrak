const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4040;

// routes
const userRouter = require('./routes/userRouter');
const vaxRouter = require('./routes/vaxRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/user', userRouter);
app.use('/vaccinations', vaxRouter);

// respond with main app
app.get('/', (req, res) =>
  res.status(200).sendFile(path.resolve(__dirname, '../data/index.html'))
);
app.get('/', express.static(path.resolve(__dirname, '../data')));

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.sendStatus(404));

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
