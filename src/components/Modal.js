import DownloadSvg from "./DownloadSvg";
import DownloadWhiteSvg from "./DownloadWhiteSvg"
const Modal = ({setShowModal}) => {
  return (
    <div className="modalComponent">
      <div className="modalComponent__head">
        <div className="modalComponent__head--button">
          <button onClick={()=> setShowModal(false)} >close x</button>
        </div>
        <div className="modalComponent__head--id">#1773455</div>
      </div>
      <div className="modalComponent__main">
        <div className="modalComponent__information">
          <div className="modalComponent__information--title">information</div>
          <div className="modalComponent__information--product">
            <div className="modalComponent__information--product--img">
              <img src="svg/mainT.png" alt="" />
              <div className="modalComponent__information--product--img--downloadBtn">
                <button> <p>Download</p> <DownloadWhiteSvg/> </button>
              </div>
            </div>
            <div className="modalComponent__information--product--detail">
              <div className="modalComponent__information--product--detail--name">
                <p className="bold">Bella Cavas</p>
                <p>Orange</p>
              </div>
              <div className="modalComponent__information--product--detail--category">
                <p className="bold">Category</p>
                <p>Elite</p>
              </div>
              <div className="modalComponent__information--product--detail--size">
                <p className="bold">Size</p>
                <p>XL</p>
              </div>
              <div className="modalComponent__information--product--detail--quantity">
                <p className="bold">Quantity</p>
                <p>2</p>
              </div>
            </div>
          </div>
        </div>
        <div className="modalComponent__attachments">
          <div className="modalComponent__attachments--title">Attachments</div>
          <div className="modalComponent__attachments--container">
            <div className="modalComponent__attachments--container--name">
              <p className="bold">Name</p>
              <p>image.png</p>
              <p>image2.png</p>
            </div>
            <div className="modalComponent__attachments--container--size">
              <p className="bold">Size</p>
              <p>200kb</p>
              <p>250kb</p>
            </div>
            <div className="modalComponent__attachments--container--download">
              <p className="bold">Download</p>
              <DownloadSvg/>
              <DownloadSvg/>
            </div>
          </div>
        </div>
        <div className="modalComponent__writtenNote">
          <div className="modalComponent__writtenNote--title">written Note</div>
          <div className="modalComponent__writtenNote--Note">
            I was looking for the quality garments and finally got it. It’s
            great buying from inkredible and I love their services, Online and
            Offline. I always wanted to customize my own design but keep the
            quality and
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
