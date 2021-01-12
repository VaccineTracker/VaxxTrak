const db = require('../models/userModel');

const userController = {};

const query = {
  create: 'INSERT INTO users (name) VALUES ($1) RETURNING *',
  get: 'SELECT * FROM users WHERE name=$1',
  remove: 'DELETE FROM users WHERE _id=$1',
};

userController.createUser = async (req, res, next) => {
  try {
    const { name } = req.params;
    const { rows } = await db.query(query.create, [name]);
    const [data] = rows;
    console.log(data);
    return next();
  } catch (error) {
    return next({
      error: `error inside userController.createUser, ERROR: ${error}`,
    });
  }
};

userController.getUser = async (req, res, next) => {
  try {
    const { name } = req.params;
    const { rows } = await db.query(query.get, [name]);
    [res.locals.user] = rows;

    return next();
  } catch (error) {
    return next({
      error: `error inside userController.getUser, ERROR: ${error}`,
    });
  }
};

userController.deleteUser = async (req, res, next) => {};

module.exports = userController;
