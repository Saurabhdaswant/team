import ReactDom from "react-dom";

function Popup({setShowPopup}) {
  return ReactDom.createPortal(
    <>
      <div className="overlay"></div>
      <div className="popup">
        <div>
          <p className="bold">Confirm ‘Dispatched’</p>
        </div>
        <div className="confirmButtons" >
            <button onClick={()=> setShowPopup(false)}  className="popup__confirm__yes bold"   >Yes</button>
            <button onClick={()=> setShowPopup(false)}  className="popup__confirm__no bold"   >No</button>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

export default Popup;
