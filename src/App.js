import "./App.css";

import Footer from "./components/layout/footer/footer"
import Header from "./components/layout/header/header";
import UserContainer from "./components/user/userContainer/UserContainer";
import CardContainer from "./components/cards/CardContainer/CardContainer";

function App() {
  return (
  <div className="App">
      <Header />
      <UserContainer />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
