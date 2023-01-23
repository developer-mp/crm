import Email from "../../assets/images/email.png";
import "./VerifyMessage.css";

const VerifyMessage = () => {
  return (
    <div className="verify">
      <img src={Email} alt="" />
      <h1>Please check email for verification code</h1>
      <p>
        A verification email has been sent. Click the link to verify your
        account.
      </p>
    </div>
  );
};

export default VerifyMessage;
