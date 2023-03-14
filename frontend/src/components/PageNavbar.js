import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { BsCalendarCheck } from "react-icons/bs";
export default function PageNavbar() {
    return (
        <Navbar className="shadow" id="navbar">
            <Container fluid bg="light" expand="lg" className="px-4">
                <Navbar.Brand 
                    as={Link}
                    to="/"
                    className="d-flex align-items-center"
                >
                    <BsCalendarCheck />
                    <span className="ms-3">TODO</span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}