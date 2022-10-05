import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import MenuContainer from "./../menu/MenuContainer.js";

const ProtectedRoute = () => {
  const { successLogin } = useSelector((state) => state.user);

  // return successLogin ? <Outlet /> : <Navigate to="/login" />;
  return successLogin ? <MenuContainer /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
