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
  res.json({ place });
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY.find((p) => {
    return p.creator === userId;
  });
  res.json({ place });
});

module.exports = router;
