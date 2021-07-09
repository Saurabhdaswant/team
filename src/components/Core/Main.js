import { Switch, Route } from "react-router-dom";
import Calling from "../Calling";
import Account from "../Account";
import CustomServices from "../CustomServices";
// import Chart from "../Chart";
import Statictis from "../Statictis";
import Money from "../Money";

const Main = () => {
  return (
    <div className="main">
      <div className="main-child-one">
        <div className="main__child-one__header">
          <div className="input">
            <input type="text" />
            <div className="searchsvg">
              <img src="svg/search.svg" alt="" />
            </div>
          </div>
          <div className="main__child-one__header-status">
            <p className="active">processing</p>
            <p>completed</p>
          </div>
        </div>
        <div className="main__child-one__progressChart">
          <div className="progreesContainer">
            <Switch>
              {/* <Route exact path="/" component={Chart} /> */}
              <Route path="/Calling" component={Calling} />
              <Route path="/Account" component={Account} />
              <Route path="/CustomServices" component={CustomServices} />
              <Route path="/Statictis" component={Statictis} />
              <Route path="/Money" component={Money} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
