const Fut = () => {
  return (
    <div className="notifications">
      <div className="">
        <div className="notification__order">
          <p className="notification__type">New Order</p>
          <p className="notification__id">#238478</p>
        </div>
        <div className="notification--ordertype">
          <div className="orderImg">
            <img src="svg/tshirt.svg" alt="" />
          </div>
          <div className="notification__orderName">
            <p className="order__name">Bella Canvas</p>
            <p>orange</p>
          </div>
        </div>
        <div className="order__time">9:53 am</div>
      </div>
    </div>
  );
};

export default Fut;
