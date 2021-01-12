const db = require('../models')
const userController = {}; 

userController.createUser =  async (req, res, next) => {
        try{
            const newUser = db.query('INSERT INTO VALUES', [req.body.newUser])
        } catch (error){
            return next(error)
        }
        return next(); 
}; 


userController.verifyUser = async (req, res, next) => {
       try{
        const checkUser = await db.query('SELECT FROM {ROW} WHERE ID =') 
       } catch(error){
           return next(error)
       }
      
}; 

userController.deleteUser = async (req, res, next) => {
        try{
            const deleteUser = await db.query('DELETE FROM {row} WHERE id ', [req.params.id] )
             res.locals.deleteUser = deleteUser; 
             next()
        } catch (error) {
            return next(error);
        }
}; 


module.exports = userController;
