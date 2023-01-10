const { MongoClient } = require("mongodb");
const Db = process.env.MONGO_URI;
console.log(Db);
const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (db) {
        _db = db.db("coctail_database");
        console.log("Successfully connected to MongoDB");
      }
      return callback(err);
    });
  },
  getDb: function () {
    return _db;
  },
};
