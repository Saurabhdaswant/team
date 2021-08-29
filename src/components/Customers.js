import CustomerDetail from "./CustomerDetail"
const Customers = () => {
  return <div className="CustomerService" >
  <div className="CustomerService__CustomerDetail">
    <div className="CustomerService__CustomerDetail--head">
      <p className="bold">Name</p>
      <p className="bold">Adress</p>
      <p className="bold">Phone no.</p>
      <p className="bold">Email ID</p>
    </div>
  </div>
  <CustomerDetail/>
  <CustomerDetail/>
  <CustomerDetail/>
  <CustomerDetail/>
  <CustomerDetail/>
</div>
};

export default Customers;
