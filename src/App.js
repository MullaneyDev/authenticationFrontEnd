import "./App.css";

import { useState, useEffect } from "react";
import Admin from "./components/admin/Admin";
import LoggedIn from "./components/loggedIn/LoggedIn";
import NotLoggedIn from "./components/notLoggedIn/NotLoggedIn";
import { authCheck } from "./utils";
import { getTokenFromCookie } from "./common";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token");

      if (token === false) {
        setUser({});
        setLoggedIn(false)
      } else {
        loginWithToken(token, setUser, setAdmin);
      }
    }
  }, []);

  const loginWithToken = async (token, setUser, setAdmin) => {
    const persistentUser = await authCheck(token);
    await setUser(persistentUser);
    await setAdmin(persistentUser.user.isAdmin);
    await setLoggedIn(true)
  };

  if (!loggedIn) {
    return (
      <div className="App">
        <NotLoggedIn
          users={users}
          setUsers={setUsers}
          user={user}
          setUser={setUser}
          admin={admin}
          setAdmin={setAdmin}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
    );
  }
  if (admin) { 
    return(
 <div className="App">
      <Admin
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
        admin={admin}
        setAdmin={setAdmin}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
      />
    </div>)} else { return(
      <div className="App">
        <LoggedIn
          users={users}
          setUsers={setUsers}
          user={user}
          setUser={setUser}
          admin={admin}
          setAdmin={setAdmin}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      </div>
    );
  }
}
export default App;
