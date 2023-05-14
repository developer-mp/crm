import { useState } from "react";
import "./ForgotPassword.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/forgot", { email });
      setSuccess(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="forgot">
      <div className="forgot-wrapper">
        <h1 className="forgot-title">Forgot password</h1>
        <form className="forgot-form" onSubmit={handleSubmit}>
          <label>Email</label>{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="button">
            Reset
          </button>
          {success && <p>Password reset email sent</p>}
          {error && <p>Failed to reset password</p>}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
