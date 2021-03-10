import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import MainPage from "./components/Main/MainPage";
import MainSearch from "./components/Main/MainSearch";
import CreateTrip from "./components/Main/CreateTrip";
import Navbars from "./components/Navbar/Navbar";
import Cabinet from "./components/Cabinet/Cabinet";
import { useDispatch, useSelector } from "react-redux";
import Logout from "./components/login/Logout";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import CurrentTrips from "./components/Trips/CurrentTrips";
import PastTrips from "./components/Trips/PastTrips";
import MyTrips from "./components/Trips/MyTrips";
import Trips from './components/Trips/Trips'
import EditTrips from './components/Trips/EditTrips'

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Router>

      <Navbars />
      <div id='main'>
      <div className='inner'>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/findroute">
            <MainSearch />
          </Route>
          <Route path="/signup">
          {isAuth ? <Redirect to="/" /> :  <Signup />}
          </Route>

          <Route path="/signin">
            {isAuth ? <Redirect to="/" /> : <Signin />}
          </Route>

          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/createtrip">
            <CreateTrip />
          </Route>
          <Route path="/cabinet">
            <Cabinet />
          </Route>
          <Route path="/trips">
            <Trips />
          </Route>

          <Route exact path="/mytrips">
            <MyTrips />
          </Route>
          <Route path="/current">
            <CurrentTrips />
          </Route>
          <Route path="/past">
            <PastTrips />
          </Route>

          <Route exact path="/mytrips/:id">
            {/* <Route  path="/:id"> */}

            <EditTrips />
          </Route>

        </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;

