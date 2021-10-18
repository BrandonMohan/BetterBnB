import React, { useState } from 'react';
import { Modal } from '../../context/modal';
import UpdateSpot from './UpdateSpotForm';
import {useSelector} from 'react-redux'
import { useParams } from 'react-router'

function EditFormModal() {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const userId = useSelector((state) => state.session?.user?.id)
  const spots = useSelector((state) => state.spots[id])


  return (
    <div className="update_container">
      {spots?.userId === userId ?
      <button onClick={() => setShowModal(true)}>Edit Spot</button> :
      null}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UpdateSpot />
        </Modal>
      )}
    </div>
  );
}

export default EditFormModal;
