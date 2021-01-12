const express = require('express');

const vaxController = require('../controllers/vaxController.js');

const router = express.Router();

router.get('/:state', vaxController.getState, (req, res) => {
  res.status(200).send(res.locals.stateData);
});

module.exports = router;
