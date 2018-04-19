const express = require("express");
      app = express();
      bodyParser = require("body-parser");
      morgan = require("morgan");
      cors = require("cors");
      PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json());
app.disable("x-powered-by");

const moviePath = require("./src/routes/movies");
app.use("/movies", moviePath);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json(err);
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

const listener = console.log(`Server start on port ${PORT}`);
app.listen(PORT, listener);

module.exports = app;
