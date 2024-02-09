import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { signup } from "../../Services/authServices";
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";

import "./auth.css";
const Signup = () => {
  const [signupPayload, setSignupPayload] = React.useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  return (
    <div className="auth">
      <div className="auth__container">
        <img src={`${process.env.PUBLIC_URL}/assets/images/logo123.avif`} alt="" />
        <div className="auth__form">
          <TextInput
            label="Full name"
            value={signupPayload.fullName}
            onChange={(val) =>
              setSignupPayload({
                ...signupPayload,
                fullName: val.toLocaleString(),
              })
            }
            placeholder="Enter your name"
          />
          <TextInput
            label="Email"
            value={signupPayload.email}
            onChange={(val) =>
              setSignupPayload({
                ...signupPayload,
                email: val.toLocaleString(),
              })
            }
            placeholder="Enter email address"
          />
          <TextInput
            label="Password"
            value={signupPayload.password}
            onChange={(val) =>
              setSignupPayload({
                ...signupPayload,
                password: val.toLocaleString(),
              })
            }
            type="password"
            placeholder="Enter password"
          />
        </div>
        <div className="auth__action">
          <Button
            label="Sign up"
            onClick={() => signup(signupPayload, navigate)}
          />
          <p>
            Already have an account? <Link to="/login">Login</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
