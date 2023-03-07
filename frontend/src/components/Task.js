import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

export default function Task(props) {
    const status = () => {
        const isDone = props.task.done;

        if (isDone) {
            return <span>Completed</span>
        }
        return <span>Incomplete</span>
    }

    return (
        <Row className="d-flex justify-content-between align-items-center">
            <Col sm="1">
                <Form.Group controlId="isDone" className="me-3">
                    <Form.Check type="checkbox" />
                </Form.Group>
            </Col>
            <Col sm="6">
                {props.task.name}
            </Col>
            <Col sm="3">
                {status()}
            </Col>
            <Col sm="1">
                <AiFillDelete  />
            </Col>
            <Col sm="1">
                <AiFillEdit  />
            </Col>
            {/* <div className="d-flex justify-content-around align-items-center">
                <Form.Group controlId="isDone" className="me-3">
                    <Form.Check type="checkbox" />
                </Form.Group>
                <div className="d-flex flex-column justify-content-start">
                    <span>{props.task.name}</span>
                    <span>{props.task.date}</span>
                </div>
            </div>
            <div>{status()}</div>
            <div>
                <AiFillDelete className="me-3" />
                <AiFillEdit className="me-3" />
            </div> */}
        </Row>
    );
}