import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Fragment, useState } from "react";
import CreateModal from "./CreateModal";

const initialState = {
    filterOptions: "" 
}

export default function PageHeader() {
    const [fields, setFields] = useState(initialState);
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    const handleFieldsChange = e => setFields({
        ...fields,
        [e.currentTarget.id]: e.currentTarget.value 
    });

    // const updateFields = value => {
    //     return setFields(prev => {
    //         return { ...prev, ...value };
    //     });
    // }

    return (
        <Fragment>
            <Row className="d-flex justify-content-between mt-4 mx-5">
                <Col sm="12" md="3" lg="3">
                    <Button 
                        type="button"
                        variant="primary"
                        className="px-3"
                        onClick={handleShow}
                    >
                        Add Task
                    </Button>
                </Col>
                <Col sm="12" md="3" lg="3">
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
            <Row>
                <CreateModal 
                    show={showModal}
                    handleClose={handleClose}
                />
            </Row>
        </Fragment>
        
    );
}