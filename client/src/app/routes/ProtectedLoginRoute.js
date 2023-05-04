import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedLoginRoute = ({ children }) => {
  const { successLogin } = useSelector((state) => state.user);
  let location = useLocation();

  if (!successLogin) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default ProtectedLoginRoute;
