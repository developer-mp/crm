import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRegisterRoute = ({ children }) => {
  const { successRegister } = useSelector((state) => state.user);
  const isRegistered = Cookies.get("successRegister") === "true";
  let location = useLocation();

  if (!successRegister && !isRegistered) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedRegisterRoute;
