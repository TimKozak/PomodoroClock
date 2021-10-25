import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { TimePicker } from "antd";
import moment from "moment";

const FormBtn = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="floating-button">
        <i className="far fa-clock fa-3x"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TimePicker defaultValue={moment("00:00", "mm:ss")} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FormBtn;
