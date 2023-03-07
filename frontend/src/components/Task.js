import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function Task(props) {
    return (
        <Container>
            <Form.Group controlId="isDone">
                <Form.Check type="checkbox" />
            </Form.Group>
            <div>
                <span>{props.task.name}</span>
                <span>{props.task.date}</span>
            </div>
            <div>
                
            </div>
        </Container>
    );
}