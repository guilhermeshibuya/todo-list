import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { TiDeleteOutline } from "react-icons/ti";

export default function DeleteModal(props) {
    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body className="text-center">
                <TiDeleteOutline className="text-danger" style={{fontSize: "3.5rem"}}/>
                <p>Are you sure?</p>
                <p>Do you really want to delete this task? This process cannot be undone.</p>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-between">
                <Button 
                    variant="secondary"
                    onClick={ props.handleClose }
                >
                    Cancel
                </Button>
                <Button 
                    variant="danger"
                    onClick={ props.handleConfirmClose }
                >
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    )
}