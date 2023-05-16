import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetPassword } from "../../actions/user.js";
import "./ForgotPassword.css";
import Cookies from "js-cookie";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { successResetPassword } = useSelector((state) => state.user);

  console.log(successResetPassword);

  useEffect(() => {
    if (successResetPassword) navigate("/login");
  }, [navigate, successResetPassword]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  const password = useRef({});

  password.current = watch("password", "");

  const submitForm = (data) => {
    const email = Cookies.get("email");
    const password = data.password;
    dispatch(resetPassword({ email, password }));
  };

  return (
    <div className="forgot">
      <div className="forgot-wrapper">
        <h1 className="forgot-title">Reset password</h1>
        <form className="forgot-form" onSubmit={handleSubmit(submitForm)}>
          <label>New password</label>
          {errors.password && (
            <p className="forgot-error">{errors.password.message}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password", {
              minLength: {
                value: 8,
                message: "Password must have at least 8 characters",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W).*$/,
                message:
                  "Must include at least one upper case, one lower case, one number, and one special character",
              },
            })}
            required
          />
          <button type="submit" className="button">
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
