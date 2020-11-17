import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY = [
  {
    id: "1",
    title: "New York",
    description: "Empire State Building",
    imageUrl: "",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.1029384,
      lng: -73.1029348,
    },
    creator: "1",
  },
];
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY.filter((place) => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
