const Order = () => {
  return (
    <div>
      <div className="tableRow">
        <div className="tableData Product">
          <img src="img/tshirt.png" alt="" />

          <div className="tableData">
            <p>orginal fav</p>
            <p className="light">Dark blue</p>
          </div>
        </div>

        <div className="tableData light">#6553218</div>
        <div className="tableData light">premimum</div>
        <div className="tableData light"></div>
        <div className="tableData light"></div>
        <div className="tableData light">20-5-2020</div>
        <div className="tableData light">$25.00</div>
      </div>

      <div>
        <div className="line">
          <div className="circle circlelactive"></div>
          <div className="circle circlelactive"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>

        <div className="tableRow">
          <div className="tableData">
            <p>placed</p>
            <p className="light">fri, 28th may</p>
          </div>
          <div className="tableData">
            <p>printed</p>
            <p className="light">fri, 28th may</p>
          </div>
          <div className="tableData">
            <p>dispatched</p>
            <p className="light">fri, 28th may</p>
          </div>
          <div className="tableData">
            <p>outForDelivery</p>
            <p className="light">fri, 28th may</p>
          </div>
          <div className="tableData">
            <p>delivered</p>
            <p className="light">fri, 28th may</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
