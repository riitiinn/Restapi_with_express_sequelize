const cors = require("cors");

const express = require("express");

const logger = require("morgan");

const httpStatus = require("http-status");

require("dotenv").config({ path: `${__dirname}/../.env` });

const app = express();

const errorHandler = require("errorhandler");

app.use(cors());
app.use(logger("tiny"));
app.set("port", process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ? Server test route
app.get("/", (_req, res) => {
  res.status(httpStatus.OK).json({
    data: {
      status: "Success",
      message: "Hello from the Blog Api",
    },
  });
});
app.use(require("./routes/index"));

app.use((err, _req, res, next) => {
  console.log(err);
  if (!err) {
    console.log("next");
    next();
    return;
  }

  err.statusCode &&
    res
      .status(err.statusCode || 500)
      .json({ message: err.message || "Something Went Wrong" });
});

app.use((err, _req, res, next) => {
  res.status(404).json({ message: "API route not available." });
});

if (process.env.NODE_ENV !== "production") {
  app.use(errorHandler());
}

app.listen(app.get("port"), () => {
  // eslint-disable-next-line no-console
  console.log(`listening on *:${app.get("port")} in ${app.get("env")} mode`);
});