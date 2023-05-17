import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ children, verify, reset }) => {
  const { successLogin } = useSelector((state) => state.user);
  const isRegistered = Cookies.get("pendingRegister") === "true";
  const email = Cookies.get("email");

  let isAuthenticated = verify ? isRegistered : successLogin;
  if (reset) {
    isAuthenticated = email ? true : false;
  }

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRoute;
