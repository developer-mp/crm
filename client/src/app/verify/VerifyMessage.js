import Email from "../../assets/images/email.png";
import "./Verify.css";

const VerifyMessage = () => {
  return (
    <div className="verify">
      <img src={Email} alt="" />
      <h1>A verification email has been sent</h1>
      <p>
        Please click the link to verify your account. The link will expire in 3
        days
      </p>
    </div>
  );
};

export default VerifyMessage;
