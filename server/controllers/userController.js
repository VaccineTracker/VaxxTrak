const db = require('../models/userModel');

const query = {
  create: 'INSERT INTO task (name, created_at) VALUES ($1, CURRENT_TIMESTAMP)',
  get: 'SELECT * FROM users',
  remove: 'DELETE FROM users WHERE _id=$1',
};

module.exports = {
  async createUser() {
    try {
      const { create } = query;
      const { name } = req.body;
      await db.query(create, [name]);
      console.log(`userController.createUser -> ${name}}`);
      return next();
    } catch (error) {
      return next({
        error: `error inside userController.createUser, ERROR: ${error}`,
      });
    }
  },

  getUser() {},

  deleteUser() {},
};
