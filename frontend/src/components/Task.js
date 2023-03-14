import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import moment from "moment/moment";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useEffect, useState } from "react";
import { getTask, updateTask } from "../services/TaskServices";
import "../App.css"

export default function Task(props) {
    const [isChecked, setIsChecked] = useState(props.task.done);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getTask(props.task._id);

                setIsChecked(response.data.done);
            } catch (error) {
                alert(error);
            }
        }
        fetchData();
    }, [props.task._id]);

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
                    onClick={() => props.deleteTask(props.task._id)}
                >
                    <AiFillDelete />
                </Button>
            </Col>
            <Col sm="1">
                <Button
                    onClick={() => props.editTask(props.task)}
                >
                    <AiFillEdit  />
                </Button> 
            </Col>
        </Row>
    );
}