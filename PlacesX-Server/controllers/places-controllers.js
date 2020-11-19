const uuid = require("uuid/v4");

let DUMMY = [
  {
    id: "p1",
    title: "empire state",
    description: "One of the Largest",
    location: {
      lat: 40.7484474,
      lng: 40.7484474,
    },
    address: "20 W 34th St, New York, NY 10001",
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

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body;
  const createdPlace = {
    id: uuid(),
    title,
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY.push(createdPlace);
  res.status(201).json({ place: createdPlace });
};

const updatePlace = (req, res, next) => {
  const { title, description } = req.body;
  const placeId = req.params.pid;
  const updatedPlace = { ...DUMMY.find((p) => p.id === placeId) };
  const placeIndex = DUMMY.findIndex((p) => p.id === placeId);
  updatedPlace.title = title;
  updatedPlace.description = description;

  DUMMY[placeIndex] = updatedPlace;
  res.status(200).json({ place: updatedPlace });
};

const deletePlace = (req, res, next) => {
  const placeId = req.params.pid;
  DUMMY = DUMMY.filter((p) => p.id !== placeId);
  res.status(200).json({ message: "Place Deleted!" });
};

// EXPORTS //

exports.getPlaceById = getPlaceById;

exports.getPlaceByUserId = getPlaceByUserId;

exports.createPlace = createPlace;

exports.deletePlace = deletePlace;

exports.updatePlace = updatePlace;
