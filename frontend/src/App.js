import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import React, { useEffect } from "react";
// import Footer from "./Components/Footer";
import HomeScreen from "./Screens/HomeScreen";
import DealScreen from "./Screens/DealScreen";
import loginScreen from "./Screens/LoginScreen";
import registerScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import ConfirmCommand from "./Screens/ConfirmCommand";
import { useDispatch } from "react-redux";
import { current } from "./redux/actions/userActions";
import { updatePrice } from "./redux/actions/commanActions";
import AdminScreen from "./Screens/AdminScreen";
import DealsBeauty from "./Screens/DealsBeauty";
import DealsDetente from "./Screens/DealsDetente";
import DealsSport from "./Screens/DealsSport";
import ProviderScreen from "./Screens/ProviderScreen";
import UsersList from "./Screens/UsersList";
import ProvidersList from "./Screens/ProvidersList";
import Resume from "./Screens/Resume";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(current());
  }, [dispatch]);
  useEffect(() => {
    dispatch(updatePrice());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomeScreen}></Route>
        <Route path="/register" component={registerScreen}></Route>
        <Route path="/user-profile/:id" component={ProfileScreen}></Route>
        <Route exact path="/admin-profile/:id" component={AdminScreen}></Route>
        <Route
          exact
          path="/admin-profile/:id/users"
          component={UsersList}
        ></Route>
        <Route
          exact
          path="/provider-profile/:id"
          component={ProviderScreen}
        ></Route>
        <Route
          path="/admin-profile/:id/providers"
          component={ProvidersList}
        ></Route>
        <Route exact path="/confirm/:id?" component={ConfirmCommand}></Route>
        <Route exact path="/resume" component={Resume}></Route>

        <Route exact path="/login" component={loginScreen}></Route>
        <Route exact path="/:id" component={DealScreen}></Route>
        <Route path="/categories/beaute" component={DealsBeauty}></Route>
        <Route path="/categories/sport" component={DealsSport}></Route>
        <Route path="/categories/detente" component={DealsDetente}></Route>
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
