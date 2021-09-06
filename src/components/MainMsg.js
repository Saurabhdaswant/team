const MainMsg = ({ showMessage, setShowMessage, NotificationComponents }) => {
  return (
    <>
      {showMessage ? (
        <div className="MainMsg_Container">
          <div className="modalComponent__head--button">
            <button onClick={() => setShowMessage(false)}>close x</button>
          </div>
          <div className="MainMsg">
            <p className="bold ">Message</p>
            <p>
              I was looking for the quality garments and finally got it. It’s
              great buying from inkredible and I love their services, Online and
              Offline. I always wanted to customize my own design but keep the
              quality and I was looking for the quality garments and finally got
              it. It’s great buying from inkredible and I love their services,
              Online and Offline. I always wanted to customize my own design but
              keep the quality and I was looking for the quality garments and
              finally got it. It’s great buying from inkredible and I love their
              services, Online and Offline. I always wanted to customize my own
              design but keep the quality and{" "}
            </p>
          </div>
        </div>
      ) : (
        <NotificationComponents />
      )}
    </>
  );
};

export default MainMsg;
