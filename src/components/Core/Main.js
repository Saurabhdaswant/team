import { Switch, Route } from "react-router-dom";
import Statictis from "../Analytics";
import Money from "../Accounting";
import CustomerService from "../CustomerService"
import Fundraise from "../Fundraise"
import Customer from "../CustomerService"
import OrdersQuote from "../OrdersQuote"
import ProductProgressCard from "../ProductProgressCard";

const Main = () => {
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
        <div className="main__childOne__navbar">
          <nav className="navbar__nav">
            <div className="nav__item nav__item--active">short</div>
            <div className="nav__item">long</div>
            <div className="nav__item">hoodies</div>
            <div className="nav__item">crewnecks</div>
            <div className="nav__item">canvas</div>
            <div className="nav__item">stickers</div>
          </nav>
        </div>

        <div className="main__childOne__orders">
          <div className="orders--type">
            <h2>Pending orders</h2>
          </div>
          <div className="orders__filterAndsort">
            <div className="filter">filter</div>
            <div className="sort">sort by</div>
          </div>
        </div>

        <div className="main__childOne__progressChart">
          <div className="progreesContainer">
            <div className="title">
              <p className="product">product</p>
              <p>order id</p>
              <p>category</p>
              <p>size</p>
              <p>Quanity</p>
              <p>Date</p>
              <p>Price</p>
            </div>
            <Switch>
              <Route exact path="/" component={ProductProgressCard} />
              <Route  path="/OrdersQuote" component={OrdersQuote} />
              <Route path="/Fundraise" component={Fundraise} />
              <Route path="/CustomerService" component={CustomerService} />
              <Route path="/Customer" component={Customer} />
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
