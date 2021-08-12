import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import Fut from "../Fut";
import Modal from "../Modal";

const Notification = () => {

  const [modal] = useState(true)
  
  return (
    <div className="notification">
      <div className="main-child-two">
{
  modal ? <Modal/> : <div className="default">
  <div className="theHead">
    <div className="head">
      <img src="svg/Bell.svg" alt="" />
      <p>Notifications</p>
    </div>
    <h3 className="day">Today</h3>
  </div>
  <div className="theHead__notification">
    <Fut />
    <Fut />
    <Fut />
    <Fut />
    <Fut />
    <Fut />
    <Fut />
    <Fut />
    <Fut />
    <Fut />
    <Switch>
      <Route exact path="/" component={Fut} />
      <Route path="/Fut" component={Fut} />
    </Switch>
  </div>
</div>
}
      </div>
    </div>
  );
};

export default Notification;
