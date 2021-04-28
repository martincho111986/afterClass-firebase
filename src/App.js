import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Form from './Form';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/form">
            <Form />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
