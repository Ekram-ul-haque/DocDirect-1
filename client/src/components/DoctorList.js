import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DoctorListStyles.css";

const DoctorList = ({ doctor, index }) => {
  const navigate = useNavigate();
  // Define a set of colors to cycle through
  const colors = [
    "#89A8B2", // Light Blue
    "#FFC785", // Light Orange
    "#87A2FF", // Light Blue
    "#A5B68D", // Light Olive
    "#E78895",
    "#789DBC", // Light Navy
    "#987D9A",
    "#03AED2", // Light Green
    "#88D66C",
    "#FFBD73", // Light Yellow
  ];

  // Use the index to cycle through the colors array
  const getBackgroundColor = (index) => {
    return colors[index % colors.length]; // Use modulo to cycle through the colors
  };

  return (
    <div
      className="doctor-card"
      onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
    >
      <img
        src="/def_doc_dp.png"
        alt="profile"
        className="profile-img"
      />
      <div className="doctor-card-header" style={{ backgroundColor: getBackgroundColor(index) }}>
        Dr. {doctor.firstName} {doctor.lastName}
      </div>
      <div className="doctor-card-body">
        <p>
          <b>Speciality:</b> {doctor.specialization}
        </p>
        <p>
          <b> Experience: </b> {doctor.experience} years
        </p>
        <p>
          <b>Fees:</b> <i className="text-xs fa-solid fa-indian-rupee-sign">&nbsp;{doctor.feesPerCunsaltation}</i>
        </p>
        <p>
          <b>Timings:</b> {doctor.timings[0]} - {doctor.timings[1]}
        </p>
      </div>
    </div>
  );
};

export default DoctorList;


// import React from "react";
// import { useNavigate } from "react-router-dom";

// const DoctorList = ({ doctor }) => {
//   const navigate = useNavigate();
//   return (
//     <>
//       <div
//         className="card m-2"
//         style={{ cursor: "pointer" }}
//         onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
//       >
//         <div className="card-header">
//           Dr. {doctor.firstName} {doctor.lastName}
//         </div>
//         <div className="card-body">
//           <p>
//             <b>Specialization</b> {doctor.specialization}
//           </p>
//           <p>
//             <b>Experience</b> {doctor.experience} years
//           </p>
//           <p>
//             <b>Fees Per Consultation</b> <i class="fa-solid fa-indian-rupee-sign"></i>{doctor.feesPerCunsaltation}
//           </p>
//           <p>
//             <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
//           </p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DoctorList;
