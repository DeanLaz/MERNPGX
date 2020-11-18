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

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    return next(new HttpError("No Valid ID for this Place!", 404));
  }
  res.json({ place });
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    return next(new HttpError("Not a Valid ID for this Creator!", 404));
  }
  res.json({ place });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;