import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Fragment, useState } from "react";
import CreateModal from "./CreateModal";

export default function PageHeader(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleFieldsChange = e => {
        props.setFilter(e.target.value);
    }

    return (
        <Fragment>
            <Row className="d-flex justify-content-between my-4 mx-5">
                <Col sm="12" md="3" className="px-0">
                    <Button 
                        type="button"
                        variant="primary"
                        className="px-3"
                        onClick={handleShow}
                    >
                        Add Task
                    </Button>
                </Col>
                <Col sm="12" md="3" className="mt-3 mt-md-0 px-0">
                    <Form.Select 
                        id="filterOptions"
                        onChange={handleFieldsChange}
                    >
                        <option value="all">All</option>
                        <option value="incomplete">Incomplete</option>
                        <option value="completed">Completed</option>
                    </Form.Select>
                </Col>
            </Row>
            <CreateModal 
                setIsFetching={props.setIsFetching}
                show={showModal}
                handleClose={handleClose}
                reqType="insert"
            />
        </Fragment>  
    );
}