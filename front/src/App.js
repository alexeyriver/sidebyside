import MainPage from './components/Main/MainPage'
import MainSearch from './components/Main/MainSearch'
import CreateTrip from './components/Main/CreateTrip'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Cabinet from './components/Cabinet/Cabinet'


function App() {
  return (
    <Router>
      <Navbar/>
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>

          <Route path="/findroute">
            <MainSearch />
          </Route>

          <Route path="/createtrip">
            <CreateTrip />
          </Route>
          <Route path="/cabinet">
            <Cabinet />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
}
export default App;
