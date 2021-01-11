const express = require('express');
const path = require('path');

const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('no angel');
});

router.get('/:name', userController.getUser, (req, res) => {
  res.status(200).send(`haunted: ${res.locals.user}`);
});

router.post('/:name', userController.createUser, (req, res) => {
  res.status(200).send(`superpower: ${res.locals.user}`);
});

module.exports = router;
