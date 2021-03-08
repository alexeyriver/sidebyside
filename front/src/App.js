import  {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import MainSearch from './components/Main/MainSearch';
import CreateTrip from './components/Main/CreateTrip';
import Navbar from './components/Navbar/Navbar';
import Cabinet from './components/Cabinet/Cabinet';
import {useDispatch, useSelector} from "react-redux";
import Logout from "./components/login/Logout";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";





function App() {


const dispatch = useDispatch()

    const isAuth = useSelector(state => state.auth.isAuth)


    return (
        <Router>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/findroute">
                        <MainSearch/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>

                    <Route path="/signin">{isAuth ? <Redirect to='/'/> : <Signin/>}</Route>

                    <Route path="/logout">
                        <Logout/>
                    </Route>
                    <Route path="/createtrip">
                        <CreateTrip/>
                    </Route>
                    <Route path="/cabinet">
                        <Cabinet/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default App;
