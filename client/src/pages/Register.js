import React from "react";
import "../styles/RegiserStyles.css";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onfinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="form-container ">
        <Form
          layout="vertical"
          onFinish={onfinishHandler}
          className="register-form"
        >
          <h3 className="text-center" style={{ fontSize: '25px' }}>Register Form</h3>
          <Form.Item label="Name" name="name" style={{ fontSize: '25px' }}>
            <Input type="text" required style={{ fontSize: '20px' }} />
          </Form.Item>
          <Form.Item label="Email" name="email" style={{ fontSize: '25px' }}>
            <Input type="email" required style={{ fontSize: '20px' }} />
          </Form.Item>
          <Form.Item label="Password" name="password" style={{ fontSize: '25px' }}>
            <Input type="password" required style={{ fontSize: '20px' }} />
          </Form.Item>
          {/* <Link to="/apply-doctor" className="m-2">
            Register as doctor
          </Link> */}
          <Link to="/login" className="m-2">
            Already a user? Login here
          </Link>
          <button className="btn btn-primary" type="submit" style={{ fontSize: '25px' }}>
            Register
          </button>
        </Form>
      </div>
    </>
  );
};

export default Register;