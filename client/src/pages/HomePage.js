import React, { useEffect, useState } from "react";
import axios from "axios";
import '../styles/HomepageStyles.css'
import Layout from "./../components/Layout";
import { Row,Col } from "antd";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  // sending token from homepage 
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      <p className="text-xl md:text-3xl p-10 text-center text-blue-500">Welcome to DocDirect - Revolutionizing Hospital Management</p>
      <p className="text-md md:text-xl pl-20 pr-20 text-center">Experience the future of healthcare management with our state-of-the-art platform. DocDirect is designed to optimize every aspect of hospital administration, ensuring seamless operations and improved patient care.</p>
      <section id="doctors">
        <h2 className="section-title">Our Doctors</h2>
        <Row gutter={[16, 16]}>
          {doctors && doctors.map((doctor) => (
            <Col key={doctor._id} xs={24} sm={12} md={8} lg={6}>
              <DoctorList doctor={doctor} />
            </Col>
          ))}
        </Row>
      </section>
    </Layout>
  );
};

export default HomePage;
