const express = require("express");
const bodyParser = require("body-parser");
const placesRoutes = require("./routes/places-routes");
const HttpError = require("./models/http-error.js");
const app = express();
app.use(bodyParser.json());
app.use("/api/places", placesRoutes);
app.use((req, res, next) => {
  return next(new HttpError("Could not find this Address!", 404));
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "Unknown Error!" });
});
app.listen(5000);
