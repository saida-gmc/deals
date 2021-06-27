import "./App.css";
import { Route } from "react-router-dom";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import DealScreen from "./Screens/DealScreen";
import loginScreen from "./Screens/loginScreen";
import registerScreen from "./Screens/registerScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ConfirmCommand from "./Screens/ConfirmCommand";



function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomeScreen}></Route>
      <Route path="/register" component={registerScreen}></Route>
      <Route path="/profile" component={ProfileScreen}></Route>
      <Route path="/confirm/:id" component={ConfirmCommand}></Route>
      <Route path="/login" component={loginScreen}></Route>
      <Route path="/deal/:id" component={DealScreen}></Route>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
