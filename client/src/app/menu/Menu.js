import MenuItem from "./element/MenuItem.js";
import MenuItemGroup from "./element/MenuItemGroup.js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { logoutUser } from "../../slices/user.js";
import "./Menu.css";

const Menu = () => {
  const { menuItems } = useSelector((store) => store.menu);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const { successLogin, successLogout, firstName, lastName } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (successLogout && !isLoggedOut) {
      navigate("/");
      setIsLoggedOut(true);
    }
  }, [navigate, successLogout, isLoggedOut]);

  const logOut = () => {
    setIsLoggedOut(true);
    dispatch(logoutUser());
  };

  const userName = firstName + " " + lastName;

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
            Welcome, {userName}
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
