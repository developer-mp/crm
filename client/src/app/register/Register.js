import { registerUser } from "../../actions/user.js";
import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";
import Cookies from "js-cookie";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loadingRegister, errorRegister, successRegister } = useSelector(
    (state) => state.user
  );

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (successRegister) navigate("/verify");
    reset();
  }, [navigate, successRegister, reset]);

  const password = useRef({});
  const firstName = useRef({});
  const lastName = useRef({});
  const email = useRef({});

  password.current = watch("password", "");
  firstName.current = watch("firstName", "");
  lastName.current = watch("lastName", "");
  email.current = watch("email", "");

  const submitForm = (data) => {
    data.email = data.email.toLowerCase();
    dispatch(registerUser(data));
    Cookies.set("successRegister", true, { expires: 3 });
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <h1 className="registerTitle">Create account</h1>
        <form className="registerForm" onSubmit={handleSubmit(submitForm)}>
          {errorRegister && <div>Error</div>}
          <label>First name</label>
          <input
            style={{ border: errors.firstName ? "2px solid #cc0000" : "" }}
            type="text"
            name="firstName"
            placeholder="First name"
            {...register("firstName", {
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters are allowed",
              },
            })}
            required
          />
          {errors.firstName && <p>{errors.firstName.message}</p>}
          <label>Last name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            {...register("lastName", {
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters are allowed",
              },
            })}
            required
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
          <label>Email</label>{" "}
          <input
            type="email"
            name="email"
            placeholder="E-mail address"
            {...register("email", {
              pattern: {
                value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Email is not in valid format",
              },
            })}
            required
          />
          {errors.email && <p>{errors.email.message}</p>}
          <label>Password</label>
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
          {errors.password && <p>{errors.password.message}</p>}
          <label>Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Password"
            required
            {...register("confirmPassword", {
              validate: (value) =>
                value === password.current || "Passwords do not match",
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
          <button type="submit" className="button" disabled={loadingRegister}>
            Register
          </button>
        </form>
        <div className="registerLogin">
          <p>Already have an account?</p>
          <Link to="/login">
            <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
