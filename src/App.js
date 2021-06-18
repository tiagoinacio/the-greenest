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
          <Route path="/login">
            <div>Login</div>
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/restaurants/:id">
            <Restaurant />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
