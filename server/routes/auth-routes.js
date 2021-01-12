const router = require('express').Router();
const passport = require('passport');



// auth login
router.get('/login', (req, res) => {
    res.render('login', {user: req.user});
});
// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    req.logout();
    res.redirect('/');
});

// auth with Google
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}));

// callback route to google to redirect
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
   res.redirect('/profile');
});

module.exports = router;