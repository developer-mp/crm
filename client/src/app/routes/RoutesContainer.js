import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardContainer from "../dashboard/DashboardContainer.js";
import { useDispatch } from "react-redux";
import { getDashboardItems } from "../../slices/dashboardSlice.js";
import { useEffect } from "react";

const RoutesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDashboardItems());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/(home)?" exact element={<DashboardContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default RoutesContainer;
