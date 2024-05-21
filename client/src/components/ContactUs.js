import React from "react";
import { Form, Input, Button } from "antd";
import "../styles/ContactUsStyles.css";

const ContactUs = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className=" section-title">Contact Us</h2>
      <Form layout="vertical" onFinish={onFinish} className="contact-form">
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input type="email" placeholder="Your Email" />
        </Form.Item>
        <Form.Item label="Message" name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
          <Input.TextArea rows={4} placeholder="Your Message" />
        </Form.Item>
        <Form.Item>
          <Button className="pb-4" type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default ContactUs;
