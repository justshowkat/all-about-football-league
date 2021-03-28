import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Components/Details/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/details/:id">
              <Details></Details>
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
