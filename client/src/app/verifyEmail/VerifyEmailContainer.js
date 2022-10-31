// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useVerifyEmail } from "../../actions/userAction.js";
// import axios from "axios";
// import "./VerifyEmail.css";
// axios.defaults.withCredentials = true;

// const VerifyEmailContainer = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { errorVerifyEmail, successVerifyEmail } = useSelector(
//     (state) => state.user
//   );

//   const { register, handleSubmit } = useForm({ mode: "onChange" });

//   useEffect(() => {
//     if (successVerifyEmail) navigate("/login");
//   }, [navigate, successVerifyEmail]);

//   const useSubmitForm = (data) => {
//     useVerifyEmail(data);
//   };

//   return (
//     <div className="verifyEmail">
//       <div className="verifyEmailWrapper">
//         <h1 className="verifyEmailTitle">Email Verification Code</h1>
//         <form
//           className="verifyEmailForm"
//           onSubmit={handleSubmit(useSubmitForm)}
//         >
//           {/* {errorRegister && <div>Error</div>} */}
//           <input
//             name="verificationCode"
//             // defaultValue={verificationCode}
//             {...register("verificationCode")}
//           />
//           <button type="submit" className="button">
//             Verify
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyEmailContainer;

// ---------------V1----------------------

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./VerifyEmail.css";
axios.defaults.withCredentials = true;

const VerifyEmailContainer = () => {
  const navigate = useNavigate();

  const { verificationcode } = useParams();

  const { handleSubmit, setValue } = useForm({ mode: "onChange" });

  useEffect(() => {
    if (verificationcode) {
      setValue("verificationCode", verificationcode);
    }
  }, [setValue, verificationcode]);

  const verifyEmail = async () => {
    try {
      await axios.post(
        `http://localhost:4366/api/auth/verifyemail/${verificationcode}`,
        { withCredentials: true }
      );
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const submitForm = (values) => {
    verifyEmail(values);
  };
  return (
    <div className="verifyEmail">
      <div className="verifyEmailWrapper">
        <h1 className="verifyEmailTitle">Email Verification Code</h1>
        <form className="verifyEmailForm" onSubmit={handleSubmit(submitForm)}>
          <input name="verificationCode" defaultValue={verificationcode} />
          <button type="submit" className="button">
            Verify
          </button>
        </form>
      </div>
    </div>
  );
};

export default VerifyEmailContainer;
