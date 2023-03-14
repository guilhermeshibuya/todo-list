import { Fragment, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import {
    updateTask
} from "../services/TaskServices";

export default function UpdateModal(props) {
    const [fields, setFeilds] = useState({});

    const handleFieldsChange = e => setFeilds({
        ...fields,
        [e.currentTarget.id]: e.currentTarget.value
    });

    const handleSubmit = () => {
        
    }
}