import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./VerifyEmail.css";

const VerifyEmailContainer = () => {
  const navigate = useNavigate();
  // const { errorVerifyEmail, successVerifyEmail } = useSelector(
  //   (state) => state.user
  // );
  const { verificationCode } = useParams();

  const {
    reset,
    handleSubmit,
    setValue,
    // formState: { errors },
    formState: { successVerifyEmail },
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (successVerifyEmail);
    reset();
  }, [successVerifyEmail, reset]);

  useEffect(() => {
    if (verificationCode) {
      setValue("verificationCode", verificationCode);
    }
  }, [setValue, verificationCode]);

  const verifyEmail = async (data) => {
    try {
      await axios.post(
        `http://localhost:4388/auth/verifyemail/${data.verificationCode}`
      );
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitHandler = (values) => {
    verifyEmail(values);
  };
  return (
    <div className="verifyEmail">
      <div className="verifyEmailWrapper">
        <h1 className="verifyEmailTitle">Email Verification Code</h1>
        <form
          className="verifyEmailForm"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          {/* {errorRegister && <div>Error</div>} */}
          <input
            label="Verification Code"
            name="verificationCode"
            value={verificationCode}
          />
          <button type="submit" className="button">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailContainer;
