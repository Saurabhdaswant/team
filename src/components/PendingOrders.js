import shirts from "./ShirtData";
import Stepper from "./Stepper";
import Steps from "./Steps";
const Grid = () => {
  return (
    <div>
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
          <>
            <div key={id} className="gridTrack">
              <div className="item1">
                <div className="orderImg">
                  <img src="svg/tshirt.svg" alt="" />
                </div>
                <div className="grid__shirtInfo">
                  <p className="shirtInfo__shirtName">{shirtName}</p>
                  <p>{color}</p>
                </div>
              </div>
              <div className="item2">#{orderId}</div>
              <div className="item3">{category}</div>
              <div className="item4">{size}</div>
              <div className="item5">{quantiy}</div>
              <div className="item6">{date}</div>
              <div className="item7">$ {price}</div>
              <div className="item9">
                <Steps />
              </div>
              <div className="item8">
                <Stepper />
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Grid;
