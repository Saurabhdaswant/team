import NewOrder from "./NewOrder";
const Notification_components = ({ showModal, setShowModal, Modal }) => {
  return (
    <>
      {showModal ? (
        <Modal setShowModal={setShowModal} />
      ) : (
        <div>
          <div className="theHead">
            <div className="head">
              <img src="svg/Bell.svg" alt="" />
              <p>Notifications</p>
            </div>
            <h3 className="day">Today</h3>
          </div>
          <div className="theHead__notification">
            <NewOrder />
            <NewOrder />
            <NewOrder />
            <NewOrder />
            <NewOrder />
            <NewOrder />
            <NewOrder />
            <NewOrder />
            <NewOrder />
            <NewOrder />
          </div>
        </div>
      )}
    </>
  );
};
export default Notification_components;
