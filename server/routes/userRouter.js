// import the user Database
//const UserDb  = require('../models/'); 
const express= require('express ');
const router = express.Router(); 

const user = require('../controllers/userController')



router.get('/:username', (req, res) => {

});

router.post('/:userName', user.createUser, (req, res) => {

}); 


router.delete('/:username', user.verifyUser, (req, res) => {

}); 

module.exports = router; 





