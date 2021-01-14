const db = require('../models/psqlDB');

const vaxController = {};

const query = {
  all: 'SELECT "US_Territory", "Total_Administered" FROM vax',
  location: 'SELECT * FROM vax WHERE "US_Territory"=$1',
};

vaxController.getAllStates = async (req, res, next) => {
  try {
    const { rows } = await db.query(query.all);
    // console.log(rows);
    res.locals.allStates = rows;
    return next();
  } catch (error) {
    return next({
      error: `!ERR!: in vaxController.getAllStates!\n !ERR!: ${error}`,
    });
  }
};

vaxController.getState = async (req, res, next) => {
  try {
    const { location } = req.params;
    const { rows } = await db.query(query.location, [location]);
    [res.locals.location] = rows;

    return next();
  } catch (error) {
    return next({
      log: `!ERR! in vaxController.getState!`,
      messge: { error },
    });
  }
};

module.exports = vaxController;
