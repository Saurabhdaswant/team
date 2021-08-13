const Modal = () => {
  return (
    <div className="modalComponent">
      <div className="modalComponent__head">
        <div className="modalComponent__head--button">
          <button>close X</button>
        </div>
        <div className="modalComponent__head--id">#1773455</div>
      </div>
      <div className="modalComponent__main">
        <div className="modalComponent__information">
          <div className="modalComponent__information--title">information</div>
          <div className="modalComponent__information--product">
            <div className="modalComponent__information--product--img">
              <img src="svg/mainT.png" alt="" />
            </div>
            <div className="modalComponent__information--product--detail">
              <div className="modalComponent__information--product--detail--name">
                <p className="bold">Bella Canvas</p>
                <p>Ora</p>
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
              <p>200kb</p>
            </div>
            <div className="modalComponent__attachments--container--download">
              <p className="bold">Download</p>
              <div className="downloadSvg">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9409 13.8843H1.38716C1.034 13.8843 0.75 14.1683 0.75 14.5214C0.75 14.8746 1.034 15.1586 1.38716 15.1586H11.9409C12.294 15.1586 12.578 14.8746 12.578 14.5214C12.578 14.1683 12.294 13.8843 11.9409 13.8843Z"
                    fill="black"
                    stroke="black"
                    stroke-width="0.5"
                  />
                  <path
                    d="M6.21401 12.0373C6.33065 12.154 6.49386 12.2253 6.66323 12.2253C6.8275 12.2253 6.99308 12.1604 7.11394 12.0359L10.1954 8.9544C10.445 8.70477 10.445 8.30271 10.1954 8.05308C9.94577 7.80346 9.54371 7.80346 9.29408 8.05309L7.30039 10.0468V1.38716C7.30039 1.034 7.01639 0.75 6.66323 0.75C6.31007 0.75 6.02607 1.034 6.02607 1.38716V10.0468L4.03238 8.05309C3.78275 7.80346 3.3807 7.80346 3.13107 8.05309C2.88144 8.30271 2.88144 8.70477 3.13107 8.9544L6.21401 12.0373Z"
                    fill="black"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
              <div className="downloadSvg">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9409 13.8843H1.38716C1.034 13.8843 0.75 14.1683 0.75 14.5214C0.75 14.8746 1.034 15.1586 1.38716 15.1586H11.9409C12.294 15.1586 12.578 14.8746 12.578 14.5214C12.578 14.1683 12.294 13.8843 11.9409 13.8843Z"
                    fill="black"
                    stroke="black"
                    stroke-width="0.5"
                  />
                  <path
                    d="M6.21401 12.0373C6.33065 12.154 6.49386 12.2253 6.66323 12.2253C6.8275 12.2253 6.99308 12.1604 7.11394 12.0359L10.1954 8.9544C10.445 8.70477 10.445 8.30271 10.1954 8.05308C9.94577 7.80346 9.54371 7.80346 9.29408 8.05309L7.30039 10.0468V1.38716C7.30039 1.034 7.01639 0.75 6.66323 0.75C6.31007 0.75 6.02607 1.034 6.02607 1.38716V10.0468L4.03238 8.05309C3.78275 7.80346 3.3807 7.80346 3.13107 8.05309C2.88144 8.30271 2.88144 8.70477 3.13107 8.9544L6.21401 12.0373Z"
                    fill="black"
                    stroke="black"
                    stroke-width="0.5"
                  />
                </svg>
              </div>
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
