import { Navbar, Nav } from "react-bootstrap";
import "./../Menu.css";

const MenuItem = (props) => {
  const { id, urlLink, title } = props.data;

  return (
    <Navbar>
      <Navbar.Brand>
        <Nav>
          <Nav.Link href={urlLink} key={id}>
            {title}
          </Nav.Link>
        </Nav>
      </Navbar.Brand>
    </Navbar>
  );
};

export default MenuItem;
