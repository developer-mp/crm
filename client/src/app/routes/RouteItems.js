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

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/" element={<ProtectedRoute />} /> */}
        <Route path="/verify" element={<VerifyMessage />} />
        <Route
          path="/verifyemail/:verificationcode"
          element={<VerifyEmail />}
        />
        <Route path="/search/:entityId" element={<Search />} />
        <Route path="/result" element={<Result />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteItems;
