import { Switch, Route } from "react-router-dom";
import Statictis from "../Analytics";
import Money from "../Accounting";
import CustomerService from "../CustomerService"
import Fundraise from "../Fundraise"
import Customer from "../CustomerService"
import OrdersQuote from "../OrdersQuote"
import OrdersShop from "../OrdersShop";

const Main = ({setShowModal,setShowMessage}) => {
  return (
    <div className="main">
      <div className="main__childOne">
        <div className="main__childOne__header">
          <div className="header__input">
            <input type="text" />
            <div className="header__search">
              <img src="svg/search.svg" alt="" />
            </div>
          </div>
          <div className="header__status">
            <p className="header__status--active">processing</p>
            <p>completed</p>
          </div>
        </div>
        
        <Switch>
              <Route exact path="/"> <OrdersShop setShowModal={setShowModal} /> </Route>
              <Route  path="/OrdersQuote" component={OrdersQuote} />
              <Route path="/Fundraise" component={Fundraise} />
              <Route  path="/CustomerService"> <CustomerService setShowMessage={setShowMessage} /></Route>
              <Route path="/Customers" component={Customer} />
              <Route path="/Statictis" component={Statictis} />
              <Route path="/Money" component={Money} />
            </Switch>
      </div>
    </div>
  );
};

export default Main;
