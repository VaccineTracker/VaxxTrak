const express = require('express');
const path = require('path');

const userController = require('../controllers/userController.js');

const router = express.Router();

router.get('/:name', userController.getUser, (req, res) => {
  res.status(200).send(`haunted: ${res.locals.user}`);
});

router.post('/:name', userController.createUser, (req, res) => {
  res.status(200).send(`superpower: ${res.locals.user}`);
});

router.delete('/:name', userController.deleteUser, (req, res) => {
  res.status(200).send(`no angel:`);
});

module.exports = router;
