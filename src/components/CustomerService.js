import CustomerDetail from "./CustomerDetail";
import { useState } from "react";
import customerDetail from "./CustomerDetailData";


const CustomerService = () => {
  const [toogle, settoogle] = useState(0);

  return (
    <div className="CustomerService">
      <div className="CustomerService__CustomerDetail">
        <div className="CustomerService__CustomerDetail--head">
          <p className="bold">Name</p>
          <p className="bold">Adress</p>
          <p className="bold">Phone no.</p>
          <p className="bold">Email ID</p>
        </div>
      </div>
      <div className="customerDetail">
        {customerDetail.map((detail) => {
          const { id } = detail;
          return <CustomerDetail key={id} detail={detail} toogle={toogle}  settoogle={settoogle} />;
        })}
      </div>
    </div>
  );
};

export default CustomerService;
