import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../actions/userAction.js";
import "./Login.css";

const LoginContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingLogin, errorLogin, successLogin } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (successLogin) navigate("/");
  }, [navigate, successLogin]);

  const { register, handleSubmit, watch } = useForm({ mode: "onChange" });

  const password = useRef({});
  const email = useRef({});

  password.current = watch("password", "");
  email.current = watch("email", "");

  const submitForm = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <h1 className="loginTitle">Login</h1>
        <form className="loginForm" onSubmit={handleSubmit(submitForm)}>
          {errorLogin && <div>Error</div>}
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
        <div className="loginRegister">
          <p>Don't have an account?</p>
          <Link to="/register">
            <button>Create account</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
