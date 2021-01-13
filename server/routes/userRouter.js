const express = require('express');

const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/', userController.authCheck, (req, res) => {
  // render profile page
  res.render('/', {user: req.user});
});

router.get('/:username', userController.getProfile, (req, res) => {
  res.status(200).json(res.locals.profile);
});

router.post('/:username', userController.createProfile, (req, res) => {
  res.status(200).json(res.locals.profile);
});

router.delete('/:username', userController.deleteProfile, (req, res) => {
  res.status(200).json(res.locals.profile);
});

module.exports = router;
