const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/cars", (req, res) => {
  let filter = req.query.filter;
  if (!filter) {
    res.status(200).json([
      {
        name: "a",
        color: "red",
      },
      {
        name: "b",
        color: "blue",
      },
    ]);
  } else {
    res.status(200).json(
      [
        {
          name: "a",
          color: "red",
        },
        {
          name: "b",
          color: "blue",
        },
      ].filter((e) => e.color === filter)
    );
  }
});

app.use(express.static("./public"));

module.exports = app;
