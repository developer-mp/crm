import Email from "../../assets/images/email.png";
import "./Verify.css";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const VerifiedEmail = () => {
  Cookies.remove("successRegister");
  return (
    <div className="verify">
      <img src={Email} alt="" />
      <h1>Thank you for signing up</h1>
      <p>Your email has been verified successfully</p>
      <Link to="/">Go to main page</Link>
    </div>
  );
};

export default VerifiedEmail;
