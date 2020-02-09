var express = require("express");
var router = express.Router();
const { pool } = require("../config");

/* GET users listing. */
const addWorkItem = (request, response) => {
  pool.query(
    "INSERT INTO work_items (url, title, description, status) VALUES ($1, $2)",
    [author, title, description, status],
    error => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .json({ status: "success", message: "Work item added." });
    }
  );
};
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

module.exports = router;
