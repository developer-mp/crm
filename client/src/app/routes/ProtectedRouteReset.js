import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRouteReset = ({ children }) => {
  const email = Cookies.get("email")?.length > 0;

  let location = useLocation();

  console.log(email);

  if (!email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default ProtectedRouteReset;
