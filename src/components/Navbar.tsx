import { Navbar, Container } from "react-bootstrap";

function Navbar() {
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
export default Navbar;
