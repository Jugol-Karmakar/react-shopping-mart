import React, { useState } from "react";
import "./ReactModal.css";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap";

const ReactModal = (props) => {
  const { image, title, price, description, rating } = props.product;
  console.log(props.priduct);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button className="details" onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <ModalHeader closeButton>
          <img className="w-50" src={image} alt="" />
          <ModalTitle className="p-4">{title}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div className="d-flex justify-content-between">
            <h4>Price : {price}$</h4>
            <h5>Rating : {rating.rate}</h5>
          </div>
          <p>{description}</p>
        </ModalBody>
        <ModalFooter>
          <button variant="secondary" className="close" onClick={handleClose}>
            Close
          </button>
          <button variant="primary" className="save" onClick={handleClose}>
            Save Changes
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ReactModal;
