// const express = require('express');
// const authRoutes = require('./server/routes/auth-routes');
// const profileRoutes = require('./server/routes/profile-routes');
// const passportSetup = require('./config/passport-setup');
// const mongoose = require('mongoose');
// const keys = require('./config/keys');
// const bodyParser = require('body-parser');
// const cookieSession = require('cookie-session');
// const passport = require('passport');

// const PORT = 3000;

// const app = express();

// app.use(express.json());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));


// set up view engine
// app.set('view engine', 'ejs');

// app.use(cookieSession({
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [keys.session.cookieKey]
// }))

// //initialize passport:
// app.use(passport.initialize());
// app.use(passport.session());


// // connect to mongodb
// mongoose.connect(keys.mongodb.dbURI, () => {
//     console.log('connected to mongodb');
// });

// set up routes
// app.use('/auth', authRoutes);
// app.use('/profile', profileRoutes); // didn't copy this--we'll use userRouter, instead

// create a home route
// app.get('/', (req, res) => {
//     res.render('home', {user: req.user})
// });


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

module.exports = app;