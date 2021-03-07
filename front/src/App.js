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
import {useSelector} from "react-redux";
import Logout from "./components/login/Logout";
import Signin from "./components/login/Signin";
import Signup from "./components/login/Signup";
import Chat from "./components/Chat/Chat";
import {useEffect} from "react";
import {chatCreatorFetchAC} from "./redux/Thunk/chatFetchesAC";
// import {ProtectedRouter} from "./components/ProtectedRoute"

function App() {




    const isAuth = useSelector(state => state.auth.isAuth)
    const userID = useSelector(state => state.auth.user._id)

    useEffect(() => {
        console.log('here')
        chatCreatorFetchAC(userID)
    },[])

    return (
        <Router>
            <Navbar/>
            <div>
                <Switch>
                    <Route exact path="/">
                        <MainPage/>
                    </Route>
                    <Route path="/chat">
                        <Chat/>
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
