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
import ProtectedLoginRoute from "./ProtectedLoginRoute.js";
import ProtectedRegisterRoute from "./ProtectedRegisterRoute.js";
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

  function Protected(Component) {
    return function ProtectedComponent(props) {
      return (
        <ProtectedLoginRoute>
          <Component {...props} />
        </ProtectedLoginRoute>
      );
    };
  }

  function ProtectedRegister(Component) {
    return function ProtectedComponent(props) {
      return (
        <ProtectedRegisterRoute>
          <Component {...props} />
        </ProtectedRegisterRoute>
      );
    };
  }

  const ProtectedDashboard = Protected(Dashboard);
  const ProtectedVerifyMessage = ProtectedRegister(VerifyMessage);
  const ProtectedVerifyEmail = ProtectedRegister(VerifyEmail);
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
        <Route path="/verify" element={<ProtectedVerifyMessage />} />
        <Route
          path="/verifyemail/:verificationcode"
          element={<ProtectedVerifyEmail />}
        />
        <Route path="/search/:entityId" element={<ProtectedSearch />} />
        <Route path="/result" element={<ProtectedResult />} />
        <Route path="/detail" element={<ProtectedDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteItems;
