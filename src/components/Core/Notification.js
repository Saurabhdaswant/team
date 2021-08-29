import { Switch, Route } from "react-router-dom";
import MainMsg from "../MainMsg";
import Modal from "../Modal";
import Notification_components from "../Notification_components"
const Notification = () => {
  return (
    <div className="notification">
      <div className="main-child-two">
        <Switch>
        <Route exact path="/" component={Notification_components} />
        <Route path="/CustomerService" component={MainMsg} />
        <Route path="/Customers" component={Modal} />
        </Switch>
      </div>
    </div>
  );
};

export default Notification;
