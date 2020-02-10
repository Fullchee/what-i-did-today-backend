const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./config");

// const helmet = require("helmet");
// const compression = require("compression");
// const rateLimit = require("express-rate-limit");
// const { body, check } = require("express-validator");

const indexRouter = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const addWorkItem = (request, response) => {
  const { url, title, description, status } = request.body;
  pool.query(
    "INSERT INTO work_items (url, title, description, status) VALUES ($1, $2, $3, $4)",
    [url, title, description, status],
    error => {
      if (error) {
        throw error;
      }
      response.status(201).json({
        status: "success",
        body: request.body,
        message: "Work item added."
      });
    }
  );
};

app.route("/workitem").post(addWorkItem);

const workItems = (request, response) => {
  pool.query("SELECT * FROM work_items", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
app.route("/workitems").get(workItems);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
