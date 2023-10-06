// src/Popup.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the root element for accessibility

const Popup = ({ isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Popup Example"
      className="modal"
    >
      <h2>Popup Content</h2>
      <p>This is a simple popup/modal dialog.</p>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default Popup;
