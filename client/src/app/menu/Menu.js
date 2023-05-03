import MenuItem from "./element/MenuItem.js";
import MenuItemGroup from "./element/MenuItemGroup.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import { logoutUser } from "../../slices/userSlice.js";
import "./Menu.css";

const Menu = () => {
  const { menuItems } = useSelector((store) => store.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    successLogin,

    successLogout,
  } = useSelector((state) => state.user);

  useEffect(() => {
    if (successLogout) navigate("/");
  }, [navigate, successLogout]);

  const logOut = () => {
    dispatch(logoutUser());
  };

  // const name = firstName + " " + lastName;

  const menuItemsList = menuItems.map((item) => {
    if (item.isGroup) {
      return <MenuItemGroup data={item} key={item.id} />;
    } else {
      return <MenuItem data={item} key={item.id} />;
    }
  });

  //     {/* {user ? (
  //   <div>accessToken: {user.accessToken}</div>
  // ) : (
  //   <div>No accessToken</div>
  // )} */}

  if (successLogin) {
    return (
      <Navbar>
        <Container>
          <Navbar>{menuItemsList}</Navbar>
          <Navbar.Text>
            Welcome,
            {/* {user} */}
            <a onClick={logOut} href="/">
              Logout
            </a>
          </Navbar.Text>
        </Container>
      </Navbar>
    );
  }
  return null;
};

export default Menu;
