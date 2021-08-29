import { Switch, Route } from "react-router-dom";
import MainMsg from "../MainMsg";
import Modal from "../Modal";
import OrdersShopNotification from "../OrdersShopNotification"
const Notification = () => {
  return (
    <div className="notification">
      <div className="main-child-two">
        <Switch>
        <Route exact path="/" component={OrdersShopNotification} />
        <Route path="/CustomerService" component={MainMsg} />
        <Route path="/Customers" component={Modal} />
        </Switch>
      </div>
    </div>
  );
};

export default Notification;
