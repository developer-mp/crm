import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { verifyEmail } from "../../actions/user.js";
import axios from "axios";
axios.defaults.withCredentials = true;

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { verificationcode } = useParams();

  useEffect(() => {
    if (verificationcode) {
      dispatch(verifyEmail(verificationcode));
      navigate("/verified");
    }
  }, [dispatch, navigate, verificationcode]);

  return <div></div>;
};

export default VerifyEmail;
