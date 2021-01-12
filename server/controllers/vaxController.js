const db = require('../models/psql_db');

const vaxController = {};

vaxController.getState = async (req, res, next) => {
  try {
    const { state } = req.params;
    const { rows } = await db.query(
      `SELECT * FROM vax WHERE "State"='${state}'`
    );
    [res.locals.location] = rows;
    return next();
  } catch (error) {
    return next({
      error: `!ERR! in vaxController.getState!\n !ERR!: ${error}`,
    });
  }
};

vaxController.getAllStates = async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM vax');
    res.locals.allStates = rows;

    return next();
  } catch (error) {
    return next({
      error: `!ERR!: in vaxController.getAllStates!\n !ERR!: ${error}`,
    });
  }
};

module.exports = vaxController;
