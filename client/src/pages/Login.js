import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/login", values);
      window.location.reload();
      dispatch(hideLoading());
      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        message.success("Login Successful");
        navigate("/");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("something went wrong");
    }
  };
  return (
    <div className="form-container ">
      <Form
        layout="vertical"
        onFinish={onfinishHandler}
        className="register-form"
      >
        <h3 className="text-center" style={{ fontSize: '25px', color: '#1ABC9C'}}>Login Form</h3>

        <Form.Item label="Email" name="email" style={{ fontSize: '25px' }}>
          <Input type="email" required style={{ fontSize: '20px' }} />
        </Form.Item>
        <Form.Item label="Password" name="password" style={{ fontSize: '25px' }}>
          <Input type="password" required style={{ fontSize: '20px' }} />
        </Form.Item>
        <Link to="/register" className="m-2">
          Register as a user
        </Link>
        <Link to="/apply-doctor" className="m-2">
          Register as a doctor
        </Link>
        <button className="btn btn-primary" type="submit" style={{ fontSize: '25px', background: "#1ABC9C"}}>
          Login
        </button>
      </Form>
    </div>
  );
};

export default Login;
