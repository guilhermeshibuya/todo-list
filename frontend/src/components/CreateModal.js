import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
    addTask
} from "../services/TaskServices";

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const task = { ...fields };

        props.setIsFetching(true);

        await addTask(task)
        .catch(error => {
            window.alert(error);
            return;
        });
        setFields(initialState);
        props.setIsFetching(false);
    }

    return (
        <Fragment>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="taskForm" onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter task name"
                                onChange={handleFieldsChange}
                                value={props.name}
                            />
                        </Form.Group>
                        <Form.Group controlId="done">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                onChange={handleFieldsChange}
                            >
                                <option value="false">Incomplete</option>
                                <option value="true">Completed</option>
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