import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Menu from "./../menu/Menu.js";

const ProtectedRoute = () => {
  const { successLogin } = useSelector((state) => state.user);

  // return successLogin ? <Outlet /> : <Navigate to="/login" />;
  return successLogin ? <Menu /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
