const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// routes
const userRouter = require('./routes/userRouter');
const vaxRouter = require('./routes/vaxRouter');

// parse requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// route handlers
app.use('/profile', userRouter);
app.use('/vaccinations', vaxRouter);

// serve static files
app.use('/assets', express.static(path.resolve(__dirname, '../src/assets')));

// server bundled javascript for production
if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')));
  app.get('/api', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
  });
}

// catch-all response for unknown routes
app.use((req, res) => res.sendStatus(404));

// global error handling
app.use((err, req, res) => {
  const defaultError = {
    log: 'express error handler caught unknown middleware error',
    status: 400,
    message: { error: 'an error occurred' },
  };

  const errorObj = { ...defaultError, ...err };
  console.error(errorObj.log);

  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`The server is active and listening on http://localhost:${PORT}`);
});

module.exports = app;
