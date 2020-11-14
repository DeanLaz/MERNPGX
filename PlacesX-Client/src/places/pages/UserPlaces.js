import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY = [
  {
    id: "1",
    title: "The Grove",
    description: "Shopping Mall",
    imageUrl: "../../assets/1.png",
    location: {
      lat: 40.7,
      lng: -73,
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
