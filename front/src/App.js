import MainPage from './components/Main/MainPage'
import MainSearch from './components/Main/MainSearch'
import CreateJourney from './components/Main/CreateJourney'
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

          <Route path="/createjourney">
            <CreateJourney />
          </Route>
          <Route path="/profile">
            <Cabinet />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
