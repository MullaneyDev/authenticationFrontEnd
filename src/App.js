import "./App.css";

import { useState } from "react";
import Admin from "./components/admin/Admin";
import LoggedIn from "./components/loggedIn/LoggedIn";
import NotLoggedIn from "./components/notLoggedIn/NotLoggedIn";

function App() {
const [users,setUsers] = useState([])
const [user,setUser] = useState({})
const [admin,setAdmin] = useState(false)
const [loggedIn, setLoggedIn] = useState(false)


if (!admin) {
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
  return (
    <div className="App">
      <LoggedIn
        users={users}
        setUsers={setUsers}
        user={user}
        setUser={setUser}
        admin={admin}
        setAdmin={setAdmin}
      loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
    </div>
  );
}
  return (
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
    </div>
  );
}

export default App;
