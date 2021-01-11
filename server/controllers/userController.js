const db = require('../models/userModel');

const userController = {};

const query = {
  create: 'INSERT INTO user (name) VALUES ($1)',
  get: 'SELECT * FROM users',
  remove: 'DELETE FROM users WHERE _id=$1',
};

userController.createUser = async (req, res, next) => {
  try {
    const { create } = query;
    const { name } = req.params;
    await db.query(create, [name]);
    console.log(`userController.createUser -> ${name}}`);
    res.locals.user = name;
    return next();
  } catch (error) {
    return next({
      error: `error inside userController.createUser, ERROR: ${error}`,
    });
  }
};

userController.getUser = async (req, res, next) => {};

userController.deleteUser = async (req, res, next) => {};

module.exports = userController;
