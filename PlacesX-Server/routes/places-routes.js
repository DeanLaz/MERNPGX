const express = require("express");

const placesControllers = require("../controllers/places-controllers");
const HttpError = require("../models/http-error");

const router = express.Router();

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post("/", placesControllers.createPlace);

router.patch("/:pid");

module.exports = router;
