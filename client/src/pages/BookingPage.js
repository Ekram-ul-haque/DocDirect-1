import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import '../styles/Booking.css';

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
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
  // ============ handle availiblity
  const handleAvailability = async () => {
    try {
      if (!date && !time) {
        return alert("Date & Time is required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availbility",
        { doctorId: params.doctorId, date, time },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(res);
      dispatch(hideLoading());
      if (res.data.success) {
        setIsAvailable(true);
        console.log(isAvailable);
        message.success(res.data.message);
      } else {
        setIsAvailable(false);
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };
  // =============== booking func
  const handleBooking = async () => {
    try {
      // setIsAvailable(true);
      if (!date && !time) {
        return alert("Date & Time is required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  const disabledHours = (startTime, endTime) => {
    const startMoment = moment(startTime, "HH:mm");
    const endMoment = moment(endTime, "HH:mm");
  
    const startHour = startMoment.hour();
    const endHour = endMoment.hour();
  
    return Array.from({ length: 24 }, (_, index) => {
      if (index < startHour || index >= endHour) {
        return index; // Disable this hour
      }
      return null; // Keep this hour enabled
    }).filter(hour => hour !== null);
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);
  return (
    <Layout>
      <h3 className="display-6" style={{color: "#3A98B9"}}>Booking Page</h3>
      <div className="container m-2">
        {doctors && (
          <div className="book-card p-3">
            <div className="left-div">
              <img
                src="/def_doc_dp.png"
                alt="profile"
                className="profile-img"
              />
              <h4 className="fs-4">
              Dr. {doctors.firstName} {doctors.lastName}
              </h4>
              <h4>
                {doctors.specialization && doctors.specialization} <i class="fa-solid fa-indian-rupee-sign"></i> {doctors.feesPerCunsaltation}
              </h4>
            </div>
            <div className="right-div">
                <h4>
                Timings: {doctors.timings && doctors.timings[0]} -{" "}
                {doctors.timings && doctors.timings[1]}{" "}
                </h4>
              <div className="d-flex flex-column w-50">
                <DatePicker
                  aria-required={"true"}
                  className="m-2"
                  format="DD-MM-YYYY"
                  onChange={(value) => {
                    setDate(moment(value).format("DD-MM-YYYY"));
                  }}
                  disabledDate={(current) => current && current < moment().endOf('day')}
                />
                <TimePicker
                  aria-required={"true"}
                  format="HH:mm"
                  className="mt-3"
                  onChange={(value) => {
                    setTime(moment(value).format("HH:mm"));
                  }}
                  disabledHours={() => disabledHours(doctors.timings && doctors.timings[0], doctors.timings && doctors.timings[1])}
                />

                <button
                  className="btn btn-primary mt-2"
                  style={{backgroundColor: "#3A98B9"}}
                  onClick={handleAvailability}
                >
                  Check Availability
                </button>
                <button className="btn btn-dark mt-2" onClick={handleBooking}>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default BookingPage;
