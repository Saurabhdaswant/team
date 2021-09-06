function CustomerDetail({ detail, toogle , handleClick }) {
  const { Name, Address, PhoneNo, EmailID, id } = detail;
  return (
    <div
      onClick={() => handleClick(id)}
      className={`CustomerDetailCard ${toogle === id && "focus"}`}
      tabindex="0"
    >
      <p>{Name}</p>
      <p>{Address}</p>
      <p>{PhoneNo}</p>
      <p>{EmailID}</p>
    </div>
  );
}

export default CustomerDetail;
