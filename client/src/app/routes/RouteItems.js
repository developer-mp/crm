import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Dashboard from "../dashboard/Dashboard.js";
import Menu from "./../menu/Menu.js";
import RegisterContainer from "../register/RegisterContainer.js";
import VerifyContainer from "../verify/VerifyContainer.js";
import VerifyEmailContainer from "../verifyEmail/VerifyEmailContainer.js";
import LoginContainer from "../login/LoginContainer.js";
import Search from "../search/Search.js";
import Result from "./../result/Result.js";
import { getDashboardItems } from "../../actions/dashboardAction.js";
import { getMenuItems } from "../../actions/menuAction.js";
import { createDetails } from "./../../actions/details.js";
import {
  fetchSearchEntities,
  fetchQueryFilters,
} from "../../actions/searchAction.js";

const RouteItems = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardItems());
    dispatch(getMenuItems());
    dispatch(fetchSearchEntities());
    dispatch(fetchQueryFilters());
    dispatch(createDetails());
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
        <Route path="/register" element={<RegisterContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        {/* <Route path="/" element={<ProtectedRoute />} /> */}
        <Route path="/verify" element={<VerifyContainer />} />
        <Route
          path="/verifyemail/:verificationcode"
          element={<VerifyEmailContainer />}
        />
        <Route path="/search/:entityId" element={<Search />} />
        {/* <Route path="/details" element={<DataGrid />} /> */}
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteItems;
