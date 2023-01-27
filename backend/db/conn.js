const { MongoClient } = require("mongodb");
const Db = process.env.MONGO_URI;

console.log(Db);

const client = new MongoClient(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var _db;
const initialData = require("./initial_data.json");

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

const insertInitialData = () => {
  module.exports.connectToServer(function (err) {
    if (err) {
      console.log("Error connecting to MongoDB");
      process.exit(1);
    } else {
      const collection = module.exports.getDb().collection("drinks");
      collection.deleteMany({}, (err) => {
        if (err) throw err;
        console.log("Deleted all previous documents from the drinks");
        collection.insertMany(initialData, (err, res) => {
          if (err) throw err;
          console.log(
            `Inserted ${res.insertedCount} documents of initial data into the drinks collection`
          );
        });
      });
    }
  });
};

insertInitialData();
