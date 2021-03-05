import MainPage from './components/Main/MainPage'
import MainSearch from './components/Main/MainSearch'
import CreateJourney from './components/Main/CreateJourney'
import MainMap from './components/Map/MainMap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>



      <div>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/findroute">Найти Маршрут</Link>
          </li>
          <li>
            <Link to="/createjourney">Создать Маршрут</Link>
          </li>
        </ul>

        <MainMap />


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
        </Switch>
      </div>
    </Router>
  );
}
export default App;
