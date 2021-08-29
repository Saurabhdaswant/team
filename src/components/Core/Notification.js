import { Switch, Route } from "react-router-dom";
import MainMsg from "../MainMsg";
import Modal from "../Modal";
import notification_components from "../notification_components"
const Notification = () => {
  return (
    <div className="notification">
      <div className="main-child-two">
        <Switch>
        <Route exact path="/" component={notification_components} />
        <Route path="/CustomerService" component={MainMsg} />
        <Route path="/Customers" component={Modal} />
        </Switch>
      </div>
    </div>
  );
};

export default Notification;
