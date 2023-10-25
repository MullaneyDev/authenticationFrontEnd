import "./App.css";

import Footer from "./components/layout/footer/footer"
import Header from "./components/layout/header/header";
import UserContainer from "./components/user/userContainer/UserContainer";
import CardContainer from "./components/cards/CardContainer/CardContainer";
import { useState } from "react";

function App() {
const [users,setUsers] = useState([])
const [user,setUser] = useState({})

  return (
    <div className="App">
      <Header />
      <UserContainer users={users} setUsers={setUsers} user={user} setUser={setUser}/>
      <CardContainer users={users} setUsers={setUsers} />
      <Footer />
    </div>
  );
}

export default App;
