const express = require("express");

const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const usersRoutes = require("./routes/users-routes");

const HttpError = require("./models/http-error.js");

const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.use("/api/places", placesRoutes);

app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  return next(new HttpError("Unknown Address!", 404));
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown Error has occured!!" });
});
mongoose
  .connect(
    "mongodb+srv://dean:dean@cluster0.clj8a.mongodb.net/placesx?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(error);
  });
