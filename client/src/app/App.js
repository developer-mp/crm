import "./App.css";
//import RoutesContainer from "./routes/RoutesContainer";
import DashboardContainer from "./dashboard/DashboardContainer.js";
import MenuContainer from "./menu/MenuContainer.js";
import RegisterContainer from "./register/RegisterContainer.js";
import VerifyContainer from "./verify/VerifyContainer.js";
import VerifyEmailContainer from "./verifyEmail/VerifyEmailContainer.js";
import LoginContainer from "./login/LoginContainer.js";
import Search from "./search/Search.js";
import Query from "../app/query/Query.js";
import { useDispatch } from "react-redux";
import { getDashboardItems } from "../actions/dashboardAction.js";
import { fetchSearchEntities } from "../actions/searchAction.js";
import { getMenuItems } from "../actions/menuAction.js";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute.js";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.user.accessToken);
  // console.log(user.accessToken);

  useEffect(() => {
    dispatch(getDashboardItems());
    dispatch(fetchSearchEntities());
    dispatch(getMenuItems());
    // if (user.accessToken) {
    //   axios.defaults.headers.common[
    //     "Authorization"
    //   ] = `Bearer ${user.accessToken}`;
    // }
  }, [dispatch]);

  return (
    <div>
      {/* <div className="app"> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MenuContainer />} /> */}
          <Route path="/" element={<DashboardContainer />} />
          <Route path="/register" element={<RegisterContainer />} />
          <Route path="/login" element={<LoginContainer />} />
          {/* <Route path="/" element={<ProtectedRoute />} /> */}
          <Route path="/verify" element={<VerifyContainer />} />
          <Route
            path="/verifyemail/:verificationcode"
            element={<VerifyEmailContainer />}
          />
          <Route path="/search/:entityId" element={<Search />} />
          <Route path="/query" element={<Query />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import React from "react";
// import "./App.css";
// import axios from "axios";
// import { fetchSearchEntities } from './../actions/searchAction';

// const App = () => {
//   const createCookie = () => {
//     axios
//       .post("http://localhost:4366/api/auth/createToken", {
//         withCredentials: true,
//       })
//       .then((res) => {
//         console.log(res.data);
//       });
//   };
//   const deleteCookie = () => {
//     axios
//       .get("http://localhost:4366/deletecookie", { withCredentials: true })
//       .then((res) => {
//         console.log(res.data);
//       });
//   };

//   return (
//     <div className="App">
//       <h1>HTTP ONLY COOKIE DEMO</h1>
//       <div className="box">
//         <button className="button green" onClick={createCookie}>
//           Create Cookies
//         </button>
//         <button className="button yellow">Renew Cookies</button>
//         <button className="button red" onClick={deleteCookie}>
//           Delete Cookie
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;
