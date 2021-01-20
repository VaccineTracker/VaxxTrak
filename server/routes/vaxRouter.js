const express = require('express');

const vaxController = require('../controllers/vaxController.js');

const router = express.Router();

router.get('/all', vaxController.getAllStates, (req, res) => {
  res.status(200).json(res.locals.allStates);
});

router.get(
  '/:zipcode',
  vaxController.fromZipcode,
  vaxController.getState,
  vaxController.fromModerna,
  vaxController.fromPfizer,
  (req, res) => {
    res.status(200).json(res.locals.location);
  }
);

module.exports = router;
