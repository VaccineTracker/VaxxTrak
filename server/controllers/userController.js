const db = require('../models/userModel');

const userController = {};

const query = {
  create: 'INSERT INTO users (name, created_at) VALUES ($1, CURRENT_TIMESTAMP)',
  get: 'SELECT * FROM users WHERE name=$1',
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

userController.getUser = async (req, res, next) => {
  try {
    const { get } = query;
    const { name } = req.params;
    const { rows } = await db.query(get, [name]);
    console.log(`userController.getUser ->`, rows[0]);
    res.locals.user = rows[0].name;
    return next();
  } catch (error) {
    return next({
      error: `error inside userController.getUser, ERROR: ${error}`,
    });
  }
};

userController.deleteUser = async (req, res, next) => {};

module.exports = userController;
