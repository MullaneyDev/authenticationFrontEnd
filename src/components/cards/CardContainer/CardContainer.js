import React from "react";
import Card from "../Card/Card";
import "./CardContainer.css";
import { findAllUsers } from "../../../utils";

const CardContainer = ({
  users,
  setUsers,
  setUser,
  setLoggedIn,
  setAdmin
}) => {
  const getUsers = async () => {
    const registeredUsers = await findAllUsers();
    setUsers(registeredUsers.getUsers);
  };
  const handleLogout = async () => {
    await setUser({});
    await setLoggedIn(false);
    await setAdmin(false)
  };

  return (
    <>
      <div className="cardContainer">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
        <button onClick={getUsers}>See Users</button>
        <button onClick={() => handleLogout()}>Log Out</button>
      </div>
    </>
  );
};

export default CardContainer;
