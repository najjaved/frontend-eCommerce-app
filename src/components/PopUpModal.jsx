import React, { useState } from "react";

const PopUpModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {/* Button to toggle modal */}
      <button onClick={toggleModal}>Open Modal</button>
      {/*  this should be the fake pay and reset button */}

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h1>You Successfully Paid!</h1>
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>Modal content goes here.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopUpModal;
