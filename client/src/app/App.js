import RouteItems from "./routes/RouteItems.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return <RouteItems />;
};

export default App;

// import React from "react";
// import "./App.css";
// import axios from "axios";
// import { fetchSearchEntities } from './../actions/searchAction';
// import axios from "axios";
// axios.defaults.withCredentials = true;

// const App = () => {

// const user = useSelector((state) => state.user.accessToken);
// console.log(user.accessToken);
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
