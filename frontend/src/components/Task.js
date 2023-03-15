import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment/moment";
import CreateModal from "./CreateModal";
import DeleteModal from "./DeleteModal";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Fragment, useState } from "react";
import { updateTask } from "../services/TaskServices";
import "../App.css"

export default function Task(props) {
    const [isChecked, setIsChecked] = useState(props.task.done);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDeleteClose = () => setShowDeleteModal(false);    
    const handleConfirmDeleteClose = () => {
        props.deleteTask(props.task._id);
        setShowDeleteModal(false);
    }
    const handleDeleteShow = () => setShowDeleteModal(true);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleCheck = async (e) => {
        try {
            const newTask = {
                ...props.task,
                done: !isChecked
            }
            
            await updateTask(props.task._id, newTask);
            setIsChecked(!isChecked);
        } catch (error) {
            alert(error);
        }
    }

    const taskName = () => {
        if (isChecked) {
            return <Row><s>{props.task.name}</s></Row>
        }  
        return <Row>{props.task.name}</Row>
    }

    const status = () => {
        if (isChecked) {
            return <span>Completed</span>
        }
        return <span>Incomplete</span>
    }

    return (
        <Fragment>
            <Row className="d-flex justify-content-between align-items-center bg-light rounded mb-3 mx-3 task-content p-1">
                <Col sm="1">
                    <Form.Group controlId="isDone" className="me-3">
                        <Form.Check 
                            type="checkbox" 
                            checked={ isChecked } 
                            onChange={ handleCheck } 
                        />
                    </Form.Group>
                </Col>
                <Col sm="6">
                    <Row>{taskName()}</Row>
                    <Row>{moment(props.task.date).format("LT, L")}</Row>    
                </Col>
                <Col sm="3">
                    {status()}
                </Col>
                <Col sm="1">
                    <Button 
                        onClick={() => handleDeleteShow()}
                    >
                        <AiFillDelete />
                    </Button>
                </Col>
                <Col sm="1">
                    <Button
                        onClick={() => handleShow()}
                    >
                        <AiFillEdit  />
                    </Button> 
                </Col>
            </Row>
            <CreateModal 
                task={props.task}
                setIsFetching={props.setIsFetching}
                show={showModal} 
                handleClose={handleClose}
                reqType="update"
            />
            <DeleteModal
                show={showDeleteModal}
                handleClose={handleDeleteClose}
                handleConfirmClose={handleConfirmDeleteClose}
            />
        </Fragment>
    );
}