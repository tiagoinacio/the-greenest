import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Restaurant from './pages/restaurant/Restaurant'

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/the-greenest/search/:location">
            <Search />
          </Route>
          <Route path="/the-greenest/restaurants/:id">
            <Restaurant />
          </Route>
          <Route path="/the-greenest/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
