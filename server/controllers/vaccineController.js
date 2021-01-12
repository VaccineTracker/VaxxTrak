const db = require('../models')
const vaccineController = {}; 


vaccineController.getAllStates = async (req, res, next) =>  {
    try {
        const allStates = db.query('SELECT * FROM {ROW} ')
    } catch(error) {
          return next(error)
    }
}; 

vaccineController.getState = (req, res, next) => {
    try {
        const getState = db.query('SELECT * FROM {ROW} = id ')
    } catch(error) {
          return next(error)
    }
}; 


module.exports = vaccineController;