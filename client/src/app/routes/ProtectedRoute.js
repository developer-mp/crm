import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, verify }) => {
  const { successLogin } = useSelector((state) => state.user);
  const isRegistered = Cookies.get("pendingRegister") === "true";
  const isAuthenticated = verify ? isRegistered : successLogin;
  let location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRoute;
