const express = require("express");

const router = express.Router();

const DUMMY = [
  {
    id: "p1",
    title: "empire state",
    descriptions: "One of the",
    location: {
      lat: 40.7484474,
    },
    adress: "20 W 34th St, New York, NY 10001",
    creator: "u1",
  },
];

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new Error("No Valid ID for this Place!");
    error.code = 404;
    return next(error);
  }
  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    const error = new Error("Not a Valid ID for this Creator!");
    error.code = 404;
    return next(error);
  }
  res.json({ place });
});

module.exports = router;
