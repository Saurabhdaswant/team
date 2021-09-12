import { useState } from "react";
import shirts from "./ShirtData";
import steps from "./StepperDB";
import Popup from "./Popup";

const OrdersShop = ({ setShowModal }) => {
  const [toogle, settoogle] = useState(0);
  const [ShowPopup, setShowPopup] = useState(false);

  const handleClick = (id) => {
    settoogle(id);
    setShowModal(true);
  };
  return (
    <>
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

      <div className="main__childOne__orders  ">
        <div className="orders--type">
          <h2>Pending orders</h2>
        </div>
        <div className="orders__filterAndsort">
          <div className="filter">
            filter
            <div className="filter__select"></div>
          </div>
          <div className="sort">
            sort by <div className="sort__select"></div>{" "}
          </div>
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
          <div className="OrdersShop">
            {shirts.map((shirt) => {
              const {
                id,
                shirtName,
                color,
                orderId,
                size,
                quantiy,
                date,
                price,
                category,
                img,
              } = shirt;
              return (
                <div
                  onClick={() => handleClick(id)}
                  className={`TrackAndStepper ${toogle === id && "focus"}`}
                  tabindex="0"
                >
                  <div className="OrdersShop__Track">
                    <div className="Track__GridTrack" key={id}>
                      <div className="itemOne">
                      <div style={{ background:`${color}` }}  className="itemOne__Img--Shirt--dot negativeMargin"></div>
                        <div className="itemOne__Img--Shirt orderImg">
                          <img src={img} alt="" />
                        </div>
                        <div className="itemOne__ShirtType">
                          <p className="ShirtType__BrandName">{shirtName}</p>
                          <p className="color">{color}</p>
                        </div>
                      </div>
                      <div className="itemTwo"> #{orderId}</div>
                      <div className="itemThree">{category}</div>
                      <div className="itemFour">{size}</div>
                      <div className="itemFive">{quantiy}</div>
                      <div className="itemSixe">{date}</div>
                      <div className="itemSeven">${price}</div>
                    </div>
                  </div>
                  <div className="OrdersShop__Stepper">
                    <div className="Stepper__Done">
                      <div className="Done__CheckList" key={id}>
                        {steps.map((step) => {
                          const { done } = step;
                          return (
                            <div onClick={()=> setShowPopup(true)} 
                              className={done ? "done" : "CheckList__Circle"}
                            ></div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="Stepper__Delivery">
                      <div className="shipping">
                        <p>placed</p>
                        <p>printed</p>
                        <p>dispatched</p>
                        <p>out for delivery</p>
                        <p>delivered</p>
                      </div>
                    </div>
                    <div className="Stepper__DayAndDate">
                      <div className="Stepper__day">
                        <p>fri,</p>
                        <p>28th May</p>
                      </div>
                      <div className="Stepper__day">
                        <p>fri,</p>
                        <p>28th May</p>
                      </div>
                      <div className="Stepper__day">
                        <p>fri,</p>
                        <p>28th May</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      { ShowPopup && <Popup setShowPopup={setShowPopup} />}
    </>
  );
};

export default OrdersShop;
