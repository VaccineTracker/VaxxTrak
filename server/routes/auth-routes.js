const router = require('express').Router();
const passport = require('passport');

// auth login
router.get('/login', (req, res) => {
  res.render('login', { user: req.user });
});
// auth logout
router.get('/logout', (req, res) => {
  // handle with passport
  req.logout();
  res.redirect('/');
});

// auth with Google
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

// callback route to google to redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.locals.isVerified = true;
  const user = 'temporary_user_id';

  res.cookie('success', user);
  res.redirect('/');
});

module.exports = router;
