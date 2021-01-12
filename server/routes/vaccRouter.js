//vaccine database 
//const vaccineData = require('../models/'); 
const express = require('express');
const router = express.Router(); 
const app = require('../server/server.js');
const vaccCont = require('../controllers/vaccineController')


router.get('/vaccine', vaccCont.getAllStates,(req, res) => {

}); 

router.get('/vacine',  vaccCont.getState, (req, res) => {

}); 

module.exports = router; 