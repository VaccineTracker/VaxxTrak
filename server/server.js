const path = require('path');
const express = require('express');
const passportSetup = require('../config/passport-setup');
const mongoose = require('mongoose');
const keys = require('../config/keys');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');

const app = express();
const PORT = 3000;

// routes
const userRouter = require('./routes/userRouter');
const vaxRouter = require('./routes/vaxRouter');
const authRoutes = require('./routes/auth-routes');

// parse requests
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// set up view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))


//initialize passport:
app.use(passport.initialize());
app.use(passport.session());


// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongodb');
});


// route handlers
app.use('/profile', userRouter);
app.use('/vaccinations', vaxRouter);
app.use('/auth', authRoutes);

// create a home route
app.get('/', (req, res) => {
  res.render('home', {user: req.user})
});


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
