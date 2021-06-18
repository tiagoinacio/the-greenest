import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/login">
            <div>Login</div>
          </Route>
          <Route path="/search">
            <div>Search</div>
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
