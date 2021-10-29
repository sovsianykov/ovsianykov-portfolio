import React, {useMemo} from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import cn from 'classnames'

const Modal = () => {

    const { isModalOpen, closeModal } = useGlobalContext();

    const classNames = useMemo(()=>cn({
        'modal-overlay':true,
        'modal-overlay show-modal':isModalOpen,
    }),[isModalOpen])

  return (
    <div className={classNames} >
      <div className="modal-container">
        <h3> modal container</h3>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
