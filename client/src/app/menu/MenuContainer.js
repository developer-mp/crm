import MenuItem from "./MenuItem.js";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../actions/userAction.js";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MenuContainer = () => {
  const { menuItems } = useSelector((store) => store.menu);
  const title = "Customers Management Console";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingLogout, errorLogout, successLogout } = useSelector(
    (state) => state.user
  );

  // const user = useSelector((state) => state.user.accessToken);

  useEffect(() => {
    if (successLogout) navigate("/");
  }, [navigate, successLogout]);

  const logOut = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="menu">
      <h3>{title}</h3>
      {menuItems.map((item) => (
        <MenuItem data={item} key={item.id} />
      ))}
      {/* {user ? (
        <div>accessToken: {user.accessToken}</div>
      ) : (
        <div>No accessToken</div>
      )} */}
      <button className="button" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

export default MenuContainer;
