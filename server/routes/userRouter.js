const express = require('express');
const path = require('path');

const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('beyonce featuring frank ocean');
});

router.get('/:name', userController.getUser, (req, res) => {
  res.json(res.locals.user);
});

router.get('/:name', userController.createUser, (req, res) => {
  res.json(res.locals.user);
});

module.exports = router;
