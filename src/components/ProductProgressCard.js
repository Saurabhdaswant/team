import { useState } from "react";
import shirts from "./ShirtData";
import steps from "./StepperDB";

const ProductProgressCard = () => {
  const [toogle, settoogle] = useState(0);

  return (
    <div className="ProductProgressCard">
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
            onClick={() => settoogle(id) }
            className={`TrackAndStepper ${toogle === id && "focus"}`}
            tabindex="0"
          >
            <div className="ProductProgressCard__Track">
              <div className="Track__GridTrack" key={id}>
                <div className="itemOne">
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
            <div className="ProductProgressCard__Stepper">
              <div className="Stepper__Done">
                <div className="Done__CheckList" key={id}>
                  {steps.map((step) => {
                    const { done, id } = step;
                    return (
                      <div
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
                  <p>out</p>
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
                {/* <div className="Stepper__date"></div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductProgressCard;
