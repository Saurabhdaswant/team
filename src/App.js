import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        good morning saurabh
        <Switch>
          <Route path="/img">
            <img src="svg/search.svg" alt="" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
