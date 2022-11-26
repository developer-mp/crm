import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import "./../Menu.css";

const MenuItemGroup = (props) => {
  const { id, title, items } = props.data;

  const menuItems = items.map((item) => {
    return (
      <NavDropdown.Item href={item.urlLink} key={item.id}>
        {item.title}
      </NavDropdown.Item>
    );
  });

  return (
    <Navbar>
      <Navbar.Brand>
        <Nav>
          <NavDropdown title={title} key={id}>
            {menuItems}
          </NavDropdown>
        </Nav>
      </Navbar.Brand>
    </Navbar>
  );
};

export default MenuItemGroup;
