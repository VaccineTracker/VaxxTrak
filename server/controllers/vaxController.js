const db = require('../models/userModel');

const vaxController = {};

vaxController.getState = async (req, res, next) => {
  try {
    const { state } = req.params;
    const { rows } = await db.query(
      `SELECT * FROM vax WHERE "State"='${state}'`
    );
    [res.locals.stateData] = rows;
    return next();
  } catch (error) {
    return next({
      error: `!ERROR! in vaxController.getState!\n !ERROR!: ${error}`,
    });
  }
};

module.exports = vaxController;
