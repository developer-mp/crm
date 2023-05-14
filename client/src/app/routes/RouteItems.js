import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Dashboard from "../dashboard/Dashboard.js";
import Menu from "./../menu/Menu.js";
import Register from "../register/Register.js";
import VerifyMessage from "../verify/VerifyMessage.js";
import VerifyEmail from "../verify/VerifyEmail.js";
import Login from "../login/Login.js";
import Search from "../search/Search.js";
import Result from "./../result/Result.js";
import Detail from "./../detail/Detail.js";
import NotFound from "../notFound/NotFound.js";
import VerifiedEmail from "./../verify/VerifiedEmail.js";
import ForgotPassword from "../forgotPassword/ForgotPassword.js";
import ProtectedRoute from "./ProtectedRoute.js";
import { getDashboardItems } from "../../actions/dashboard.js";
import { getMenuItems } from "../../actions/menu.js";
import {
  fetchSearchEntities,
  // fetchQueryFilters,
} from "../../actions/search.js";

const RouteItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardItems());
    dispatch(getMenuItems());
    dispatch(fetchSearchEntities());
    // dispatch(fetchQueryFilters());
    // if (user.accessToken) {
    //   axios.defaults.headers.common[
    //     "Authorization"
    //   ] = `Bearer ${user.accessToken}`;
    // }
  }, [dispatch]);

  function Protected(Component, verifyProp) {
    return function ProtectedComponent(props) {
      return (
        <ProtectedRoute verify={verifyProp}>
          <Component {...props} />
        </ProtectedRoute>
      );
    };
  }

  const ProtectedDashboard = Protected(Dashboard);
  const ProtectedVerifyMessage = Protected(VerifyMessage, true);
  const ProtectedVerifyEmail = Protected(VerifyEmail, true);
  const ProtectedVerifiedEmail = Protected(VerifiedEmail, true);
  const ProtectedSearch = Protected(Search);
  const ProtectedResult = Protected(Result);
  const ProtectedDetail = Protected(Detail);

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<ProtectedDashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/verify" element={<ProtectedVerifyMessage />} />
        <Route
          path="/verifyemail/:verificationcode"
          element={<ProtectedVerifyEmail />}
        />
        <Route path="/verified" element={<ProtectedVerifiedEmail />} />
        <Route path="/search/:entityId" element={<ProtectedSearch />} />
        <Route path="/result" element={<ProtectedResult />} />
        <Route path="/detail" element={<ProtectedDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteItems;
