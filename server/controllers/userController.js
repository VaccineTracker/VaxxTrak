const db = require('../models/psqlDB');

const userController = {};

const query = {
  create:
    'INSERT INTO users (name) VALUES ($1) ON CONFLICT DO NOTHING RETURNING *',
  get: 'SELECT * FROM users WHERE name=$1',
  delete: 'DELETE FROM users WHERE name=$1 RETURNING *',
};

userController.getProfile = async (req, res, next) => {
  try {
    const { username } = req.params;

    const { rows } = await db.query(query.get, [username]);
    const [profile] = rows;

    if (!profile) {
      return res.status(404).send('profile was not found');
    }
    res.locals.profile = profile;

    return next();
  } catch (error) {
    return next({
      error: `!ERR!: in userController.getProfile\n !ERR!: ${error}`,
    });
  }
};

userController.createProfile = async (req, res, next) => {
  try {
    const { username } = req.params;

    const { rows } = await db.query(query.create, [username]);
    const [profile] = rows;

    if (!profile) {
      return res.status(404).send('this username is taken');
    }
    res.locals.profile = profile;

    return next();
  } catch (error) {
    return next({
      error: `!ERR!: in userController.createProfile\n !ERR!: ${error}`,
    });
  }
};

userController.deleteProfile = async (req, res, next) => {
  try {
    const { username } = req.params;

    const { rows } = await db.query(query.delete, [username]);
    const [profile] = rows;

    if (!profile) {
      return res.status(404).send("this user's profile was not found");
    }
    res.locals.profile = profile;

    return next();
  } catch (error) {
    return next({
      error: `!ERR!: in userController.getProfile\n !ERR!: ${error}`,
    });
  }
};

userController.authCheck = (req, res, next) => {
  if (!req.user) {
    // if user is not logged in
    res.redirect('/auth/login');
  } else {
    // if logged in
    next();
  }
};

module.exports = userController;
