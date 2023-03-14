import { Fragment } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageNavbar from "../components/PageNavbar";
import "../App.css";

export default function HomeScreen() {
    return (
        <Fragment>
            <PageNavbar/>
            <Container fluid className="mt-5">
                <div 
                    className="d-flex flex-column justify-content-center align-items-center"  
                >
                    <p className="hero-title mb-0">
                        Todo-List
                    </p>
                    <p className="hero-subtitle">
                        Managing our daily activities
                    </p>
                    <Button
                        as={Link}
                        to="/tasks"
                        type="button"
                        className="mb-2"
                    >
                        Go to todo list
                    </Button>
                    <img 
                        src="https://opendoodles.s3-us-west-1.amazonaws.com/sitting-reading.svg"
                        alt="Doodle of a character reading sitting down"
                        className="img-fluid align-self-end w-75" 
                    />
                </div> 
            </Container>  
        </Fragment>
        
    );  
}