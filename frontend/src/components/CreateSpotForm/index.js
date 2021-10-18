import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import CreateSpotForm from './CreateSpotForm';

function CreateSpotModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Create a Spot</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateSpotForm />
        </Modal>
      )}
    </>
  );
}

export default CreateSpotModal;
