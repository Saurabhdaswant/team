import { Switch, Route } from "react-router-dom";
import MainMsg from "../MainMsg";
import Modal from "../Modal";
import NotificationComponents from "../NotificationComponents";

const Notification = ({
  showModal,
  setShowModal,
  showMessage,
  setShowMessage,
}) => {
  return (
    <div className="notification">
      <div className="main-child-two">
        <Switch>
          <Route exact path="/">
            {" "}
            <NotificationComponents
              showModal={showModal}
              setShowModal={setShowModal}
              Modal={Modal}
            />
          </Route>
          <Route path="/CustomerService">
            {" "}
            <MainMsg
              showMessage={showMessage}
              setShowMessage={setShowMessage}
              NotificationComponents={NotificationComponents}
            />
          </Route>
          {/* <Route path="/Customers" component={Modal} /> */}
        </Switch>
      </div>
    </div>
  );
};

export default Notification;
