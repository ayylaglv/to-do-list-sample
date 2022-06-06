import { Navbar, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Nav() {
  return (
    <Container>
      <Navbar expand="lg" fixed="top" variant="dark" bg="dark">
        <Container>
          <Navbar.Brand>To Do List</Navbar.Brand>
        </Container>
      </Navbar>
    </Container>
  );
}
export default Nav;
