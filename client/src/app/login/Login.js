import { useForm } from "react-hook-form";
import { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../actions/user.js";
import "./Login.css";
import Cookies from "js-cookie";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const { loadingLogin, errorLogin, successLogin } = useSelector(
    (state) => state.user
  );

  const isRegistered = Cookies.get("pendingRegister") === "true";

  useEffect(() => {
    if (successLogin) navigate("/");
  }, [navigate, successLogin]);

  const { register, handleSubmit, watch } = useForm({ mode: "onChange" });

  const password = useRef({});
  const email = useRef({});

  password.current = watch("password", "");
  email.current = watch("email", "");

  const submitForm = (data) => {
    if (isRegistered) {
      setError(true);
      return;
    }
    dispatch(loginUser(data));
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <h1 className="login-title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit(submitForm)}>
          {errorLogin && <div className="login-error">Wrong credentials</div>}
          {error && <div className="login-error">Please verify your email</div>}
          <label>Email</label>{" "}
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            {...register("email")}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            {...register("password")}
            required
          />
          <button type="submit" className="button" disabled={loadingLogin}>
            Login
          </button>
        </form>
        <div className="login-register">
          <p>Don't have an account?</p>
          <Link to="/register">
            <button>Create account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
