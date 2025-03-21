import React from "react";
import { Col, Form, Input, Row, TimePicker, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import axios from "axios";
import moment from "moment";
const ApplyDoctor = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //handle form
  const handleFinish = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/doctor/apply-doctor", 
        {
        ...values,
        timings: [
          moment(values.timings[0]).format("HH:mm"),
          moment(values.timings[1]).format("HH:mm"),
        ],
        },
        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        //   },
        // }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Registered Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something went wrong");
    }
  };
  return (
    <div className="doc-form-container ">

      <h3 className="text-center" style={{ fontSize: '25px' }}>Register as Doctor</h3>
      <Form layout="vertical" onFinish={handleFinish} className="m-3" style={{ maxWidth: '1000px', width: '100%' }}>
  <h4 className="" style={{ fontSize: '18px' }}>Personal Details:</h4>

  <Row gutter={20}>
    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item
        label="First Name"
        name="firstName"
        required
        rules={[{ required: true }]}
      >
        <Input type="text" placeholder="Your first name" />
      </Form.Item>
    </Col>

    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: false }]}
      >
        <Input type="text" placeholder="Your last name" />
      </Form.Item>
    </Col>
  </Row>

  <Row gutter={20}>
    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item
        label="Email"
        name="email"
        required
        rules={[{ required: true }]}
      >
        <Input type="email" placeholder="Your email address" />
      </Form.Item>
    </Col>

    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item
        label="Password"
        name="password"
        required
        rules={[{ required: true }]}
      >
        <Input type="password" placeholder="Your password" />
      </Form.Item>
    </Col>
  </Row>

  <Row gutter={20}>
  <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item
        label="Phone No"
        name="phone"
        required
        rules={[{ required: true }]}
      >
        <Input type="text" placeholder="Your contact no" />
      </Form.Item>
    </Col>

    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item label="Website" name="website">
        <Input type="text" placeholder="Your website" />
      </Form.Item>
    </Col>
  </Row>

  <Form.Item
    label="Address"
    name="address"
    required
    rules={[{ required: true }]}
  >
    <Input type="text" placeholder="Your clinic address" />
  </Form.Item>

  <h4 style={{ fontSize: '18px' }}>Professional Details:</h4>

  <Row gutter={20}>
    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item
        label="Specialization"
        name="specialization"
        required
        rules={[{ required: true }]}
      >
        <Input type="text" placeholder="Your specialization" />
      </Form.Item>
    </Col>

    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item
        label="Experience"
        name="experience"
        required
        rules={[{ required: true }]}
      >
        <Input type="text" placeholder="Your experience" />
      </Form.Item>
    </Col>
  </Row>

  <Row gutter={20}>
    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item
        label="Fees Per Consultation"
        name="feesPerConsultation"
        required
        rules={[{ required: true }]}
      >
        <Input type="text" placeholder="Your fees per consultation" />
      </Form.Item>
    </Col>

    <Col xs={24} sm={12} md={12} lg={12}>
      <Form.Item label="Timings" name="timings" required>
        <TimePicker.RangePicker format="HH:mm" />
      </Form.Item>
    </Col>
  </Row>

  <Form.Item>
    <button className="btn btn-primary form-btn" type="submit">
      Submit
    </button>
  </Form.Item>

  <Link to="/login" className="m-2">
    Already a doctor? Login here
  </Link>
</Form>


      </div>
  );
};

export default ApplyDoctor;
