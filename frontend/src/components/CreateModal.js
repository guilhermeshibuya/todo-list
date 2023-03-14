import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { addTask, updateTask } from "../services/TaskServices";

const initialState = {
    name: "",
    done: false
}

export default function CreateModal(props) {
    const [fields, setFields] = useState(props.reqType === "insert" ? initialState : {
        name: props.task.name,
        done: props.task.done
    });

    const handleFieldsChange = e => {
        setFields({
            ...fields,
            [e.currentTarget.id]: e.currentTarget.value
        });
    }

    const handleCreateSubmit = async (e) => {
        e.preventDefault();

        const task = { ...fields };

        props.setIsFetching(true);

        await addTask(task)
        .catch(error => {
            window.alert(error);
            return;
        });

        props.setIsFetching(false);
        setFields(initialState);
    }

    const handleUpdateSubmit = async (e) => {
        e.preventDefault();

        const task = { ...fields };

        props.setIsFetching(true);

        await updateTask(props.task._id, task)

        props.setIsFetching(false);
        setFields(initialState);
    }

    const resetFieldsOnClose = () => {
        props.handleClose(); 
        if (props.reqType === "update") {
            setFields({ 
                name: props.task.name, 
                done: props.task.done 
            });
        }  
    }

    return (
        <Fragment>
            <Modal show={props.show} onHide={resetFieldsOnClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.reqType === "insert" ? "New task" : "Edit task"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="taskForm" onSubmit={props.reqType === "update" ? handleUpdateSubmit : handleCreateSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Enter task name"
                                onChange={handleFieldsChange}
                                value={fields.name}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="done">
                            <Form.Label>Status</Form.Label>
                            <Form.Select
                                onChange={handleFieldsChange}
                                value={fields.done}
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
                                {props.reqType === "insert" ? "Add task" : "Update task"}
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={resetFieldsOnClose}
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