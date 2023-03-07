import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function PageNavbar() {
    return (
        <Navbar className="shadow">
            <Container bg="light" expand="lg">
                <Navbar.Brand className="mx-auto"><h2>TODO LIST</h2></Navbar.Brand>
            </Container>
        </Navbar>
    );
}