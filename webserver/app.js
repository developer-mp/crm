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
