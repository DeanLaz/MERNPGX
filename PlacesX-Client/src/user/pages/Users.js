import React from "react";
import UsersList from "../components/UserPage/UsersList";
const Users = () => {
  const USERS = [
    {
      id: 1,
      name: "Dean",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png/400px-Felis_silvestris_silvestris_small_gradual_decrease_of_quality.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};
export default Users;
