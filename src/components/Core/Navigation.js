import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="Navigation">
      <div className="logo">
        <img src="svg/logo.svg" alt="" />
      </div>
      <div className="icons">
        <Link to="/" className="icon activeIcon">
          <img src="svg/Bag.svg" alt="" />
        </Link>
        <Link to="/CustomServices" className="icon">
          <img src="svg/customerCare.svg" alt="" />
        </Link>
        <Link to="/Calling" className="icon">
          <img src="svg/Calling.svg" alt="" />
        </Link>
        <Link to="/Account" className="icon vector">
          <img src="svg/Vector.svg" alt="" />
        </Link>
        <Link to="/Statictis" className="icon ">
          <img src="svg/arrow.svg" alt="" />
        </Link>
        <Link to="/Money" className="icon dolar">
          <img src="svg/dolarr.svg" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
