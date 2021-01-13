/* eslint-disable no-unused-vars */
const path = require('path');
const express = require('express');

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('../config/keys');

const passportSetup = require('../config/passport-setup');

const app = express();
const PORT = 3000;

// routes
const userRouter = require('./routes/userRouter');
const vaxRouter = require('./routes/vaxRouter');
const authRoutes = require('./routes/auth-routes');

// parse requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey],
  })
);

// initialize passport:
app.use(passport.initialize());
app.use(passport.session());

// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
  console.log('connected to mongodb');
});

if (process.env.NODE_ENV === 'production') {
  app.use('/build', express.static(path.resolve(__dirname, '../build')));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../index.html'));
  });
}

// create a home route
// app.get('/', (req, res) => {
//   res.render('home', { user: req.user });
// });

// serve static files
// app.use('/assets', express.static(path.resolve(__dirname, '../src/assets')));
// app.use('/', express.static('src'));
app.use(express.static('src'));
// app.use('/', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../src/index.js'));
// });
// server bundled javascript for production
// route handlers
app.use('/profile', userRouter);
app.use('/vaccinations', vaxRouter);
app.use('/auth', authRoutes);

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
