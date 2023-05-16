import Email from "../../assets/images/email.png";
import "./Verify.css";

const VerifyMessage = () => {
  return (
    <div className="verify">
      <img src={Email} alt="" />
      <h1>A verification email has been sent</h1>
      <p>Please click the link in the email to verify your account.</p>
    </div>
  );
};

export default VerifyMessage;
