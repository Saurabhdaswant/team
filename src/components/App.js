import { useState } from "react";
import Navigation from "./Core/Navigation";
import Main from "./Core/Main";
import Notification from "./Core/Notification";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  return (
    <>
      <Navigation />
      <Main setShowModal={setShowModal} setShowMessage={setShowMessage} />
      <Notification
        showModal={showModal}
        setShowModal={setShowModal}
        showMessage={showMessage}
        setShowMessage={setShowMessage}
      />
    </>
  );
}

export default App;
