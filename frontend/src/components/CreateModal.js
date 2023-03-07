import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const initialState = {
    taskName: "",
    taskStatus: "incomplete"
}

export default function CreateModal(props) {
    const [fields, setFields] = useState(initialState);

    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.id]: e.currentTarget.value
    });

    return (
        <Fragment>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="taskForm" onSubmit="">
                        <Form.Group controlId="taskName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter task name"
                                onChange={handleFieldsChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="taskStatus">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                onChange={handleFieldsChange}
                            >
                                <option value="incomplete">Incomplete</option>
                                <option value="completed">Completed</option>
                            </Form.Select>
                        </Form.Group>
                        <div className="mt-3">
                            <Button
                                className="me-2"
                                type="submit"
                                variant="primary"
                                onClick={props.handleClose}
                            >
                                Add Task
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={props.handleClose}
                            >
                                Close
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </Fragment>
    );
}