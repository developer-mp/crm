import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { forgotPassword } from "../../actions/user.js";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  // const [email, setEmail] = useState("");
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const { register, handleSubmit, watch } = useForm({ mode: "onChange" });

  const email = useRef({});
  email.current = watch("email", "");

  const submitForm = (data) => {
    dispatch(forgotPassword(data));
  };

  return (
    <div className="forgot">
      <div className="forgot-wrapper">
        <h1 className="forgot-title">Forgot password</h1>
        <form className="forgot-form" onSubmit={handleSubmit(submitForm)}>
          <label>Email</label>{" "}
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            {...register("email")}
            required
          />
          <button type="submit" className="button">
            Reset
          </button>
          {/* {success && <p>Password reset email sent</p>}
          {error && <p>Failed to reset password</p>} */}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
