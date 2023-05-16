import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { forgotPassword } from "../../actions/user.js";
import { useNavigate } from "react-router-dom";
import { resetForgotPassword } from "../../slices/user.js";
import "./ForgotPassword.css";
import Cookies from "js-cookie";

const ForgotPassword = () => {
  const { errorForgotPassword, successForgotPassword } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm({ mode: "onChange" });

  const email = useRef({});
  email.current = watch("email", "");

  const submitForm = (data) => {
    const userEmail = data.email;
    Cookies.set("email", userEmail, { expires: 3 });
    dispatch(forgotPassword(data));
  };

  useEffect(() => {
    if (successForgotPassword) {
      const timer = setTimeout(() => {
        dispatch(resetForgotPassword());
        navigate("/login");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, navigate, successForgotPassword]);

  return (
    <div className="forgot">
      <div className="forgot-wrapper">
        <h1 className="forgot-title">Forgot password</h1>
        <form className="forgot-form" onSubmit={handleSubmit(submitForm)}>
          {errorForgotPassword && (
            <p className="forgot-error">Error has occured</p>
          )}
          {successForgotPassword && (
            <p className="forgot-success">Email has been sent</p>
          )}
          <label>Email</label>{" "}
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            {...register("email")}
            required
          />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
