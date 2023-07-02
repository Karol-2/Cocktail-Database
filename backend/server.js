const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.use(require("./routes/drink"));
app.use(require("./routes/comments"));
app.use(require("./routes/reviews"));
app.use(require("./routes/stats"));

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "http://react-app:3000");
  next();
});

const dbo = require("./db/conn");

app.listen(port, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on ${port}`);
});
