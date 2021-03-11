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
import './App.css'

function App() {
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Router>
      
          <div className="navbar" >
            {/* <div className='inner'> */}
              <Navbars />
            {/* </div> */}
          </div>


          <div id='main' className="mainContainer">
            {/* <div className='inner'> */}
              <Switch>
                <Route exact path="/">
                  <MainPage />
                </Route>
                <Route path="/findroute">
                {isAuth ? <MainSearch /> : <Redirect to="/signin" /> }
                </Route>
                <Route path="/signup">
                  {isAuth ? <Redirect to="/" /> : <Signup />}
                </Route>

                <Route path="/signin">
                  {isAuth ? <Redirect to="/" /> : <Signin />}
                </Route>

                <Route path="/logout">
                  <Logout />
                </Route>
                <Route path="/createtrip">
                {isAuth ?  <CreateTrip /> : <Redirect to="/signin" /> }
                </Route>
                <Route path="/cabinet">
                {isAuth ?  <Cabinet /> : <Redirect to="/signin" /> }
                </Route>
                <Route path="/trips">
                {isAuth ?  <Trips />  : <Redirect to="/signin" /> }
                </Route>

                <Route exact path="/mytrips">
                {isAuth ?  <MyTrips />  : <Redirect to="/signin" /> }
                </Route>
                <Route path="/current">
                {isAuth ?  <CurrentTrips />  : <Redirect to="/signin" /> }
                </Route>
                <Route path="/past">
                {isAuth ?  <PastTrips />  : <Redirect to="/signin" /> }
                </Route>

                <Route exact path="/mytrips/:id">
                  {/* <Route  path="/:id"> */}

                  <EditTrips />
                </Route>

              </Switch>
            </div>
    </Router>
  );
}

export default App;

