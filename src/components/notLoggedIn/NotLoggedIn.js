import React from "react";
import Footer from "../layout/footer/footer";
import Header from "../layout/header/header";
import UserContainer from "../user/userContainer/UserContainer";

const NotLoggedIn = ({
  users,
  setUsers,
  user,
  setUser,
  admin,
  setAdmin,
  loggedIn,
  setLoggedIn,
}) => {
  return (
    <div className="App">
      <Header />
      <UserContainer
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
        admin={admin}
        setAdmin={setAdmin}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
      <Footer />
    </div>
  );
};

export default NotLoggedIn;
