import Express from "express";
import cors from "cors";
//import jwt from "express-jwt";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
// import path from "path";
// import { fileURLToPath } from "url";
import WebServerRouter from "./routes/routers.js";

const app = new Express();
const PORT = process.env.PORT;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
//const expressJwtSecret = process.env.EXPRESS_JWT_SECRET;

app.use(Express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(Express.urlencoded({ extended: false }));
//app.use(Express.static(path.join(__dirname, "public")));

// const unsecuredRoutes = ["/api/user", "/api/auth/register"];

// app.use(
//   "/api",
//   jwt({ secret: expressJwtSecret }).unless({ path: unsecuredRoutes })
// );

WebServerRouter.setRouter(app);

app.listen(PORT, () => console.log("Web server has started on port " + PORT));

// --------------------------------------------------------------------------------

// import Express from "express";
// import path from "path";
// import { fileURLToPath } from "url";
// const morgan=require("morgan");
// const jwt=require("express-jwt");
// import cors from "cors";
// const config=require("./config.json");
// const logger=require("./logger/winston");
// const messaHandler=require("./utilities/user/messaheHandler");
// import cookieParser from "cookie-parser";
// import dotenv from "dotenv";
// dotenv.config();

// import WebServerRouter from "./routes/routers.js";

// const app = new Express();
// const PORT = process.env.PORT;
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const expressJwtSecret = process.env.EXPRESS_JWT_SECRET;

// app.use(Express.json());
// app.use(cookieParser());
// app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(Express.urlencoded({ extended: false }));
// app.use(morgan("combined",{stream:logger.stream}))
// app.use(Express.static(path.join(__dirname, "public")));

// const unsecuredRoutes = [
//   "/api/auth",
//   "/api/auth/register",
//   "/api/health",
//   "/api/user/getchallenge",
//   "/api/auth/answerchallenge",
//   "/api/auth/getsecurityquestion",
// ];

// app.use(
//   "/api",
//   jwt({ secret: expressJwtSecret }).unless({ path: unsecuredRoutes })
// );

// WebServerRouter.setRouter(app);

// app.get(/^(?!\/api).+/, (req,res)=>{
//     res.sendFile(__dirname + "/public/index.html");
// });

// app.use((err, req, res)=>{
//     const message=messageHandler.getWebMessage(0);
//     if(err.name==="UnauthorizedError") {
//         res.status(401).send({error:"Unauthorized"});
//     } else if (err.name === "Server") {
//         res.status(500).send({error:"ApplicationServerError", message});
//     } else if (err.name === "WebServer") {
//         res.status(500).send({ error: "ApplicationServerError", message: err.message });
//     } else if (err.name === "AppServer") {
//          res
//            .status(500)
//            .send({ error: "ApplicationServerError", message: err.message });
//     } else {
//         logger.error(err.message);
//         res.status(500).send({error: "Internal Server Error", message});
//     }
// });

// app.use((req, res)=>{
//     res.status(404).send({error: "Not found"})
// });

// app.listen(PORT, () => console.log("Web server has started on port " + PORT));
