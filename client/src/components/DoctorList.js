import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DoctorListStyles.css";

const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <div
      className="doctor-card"
      onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}
    >
      <div className="doctor-card-header">
        Dr. {doctor.firstName} {doctor.lastName}
      </div>
      <div className="doctor-card-body">
        <p>
          <b>Specialization:</b> {doctor.specialization}
        </p>
        <p>
          <b> Experience: </b> {doctor.experience} years
        </p>
        <p>
          <b>Fees Per Consultation:</b> <i className="text-xs fa-solid fa-indian-rupee-sign">&nbsp;{doctor.feesPerCunsaltation}</i>
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
