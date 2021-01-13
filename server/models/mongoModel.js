const mongoose = require('mongoose');

const { Schema } = mongoose;
const keys = require('../../config/keys');

mongoose
  .connect(keys.mongodb.dbURI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'Test',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const userSchema = new Schema({
  username: String,
  googleId: String,
  thumbnail: String,
});

const User = mongoose.model('user', userSchema);

module.exports = User;
