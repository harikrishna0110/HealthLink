// // src/App.js
// import React from "react";
// import { useState, useEffect } from "react";
// import ReviewCard from "/SDP/frontend/src/components/DoctorLIst/ReviewCard";
// import { doctordata } from "../../assets/data/doctordata";

// const DoctorList1 = (props) => {
//   // const [DoctorData, setDoctorData] = useState([]);
//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/photos')
//   //     .then((res) => {
//   //       return res.json();
//   //     })
//   //     .then((data) => {
//   //       console.log(data);
//   //       setDoctorData(data);
//   //     });
//   // }, []);  
 
//   const [city, setCity] = useState("");
//   const [name, setDoctorName] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   // useEffect(() => {
//   //   if (props.city) {
//   //     setCity(props.city);
//   //   } else if (props.doctorname) {
//   //     setDoctorName(props.doctorname);
//   //   }
//   // }, [props.city, props.doctorname]);

//   // useEffect(() => {
//   //   const filteredResults = doctordata.filter(doctordata =>
//   //     doctordata.name.toLowerCase().includes(name.toLowerCase())
//   //   );
//   //   setSearchResults(filteredResults)
//   //   console.log(name);
//   // },[props.doctorname]);

//   return (
//     <div className="App">
//       {/* max-w-[570px] */}
//       {/* <h1 className="text-4xl font-normal	antialiased	text-center text-black tracking-wide font-sans decoration-green-200	underline">
//         Doctors
//       </h1> */}
//       <div className="grid 2xl:grid-cols-4 grid-cols-3 w-full gap-y-10">
//           {doctordata.map(
//             (
//               name,
//               index,
//               department,
//               hospiatal_name,
//               street_address,
//               city,
//               pincode,
//               state,
//               experience
//             ) => (
//               <ReviewCard
//                 key={index}
//                 {...name}
//                 {...department}
//                 {...hospiatal_name}
//                 {...street_address}
//                 {...city}
//                 {...pincode}
//                 {...state}
//                 {...experience}
//               />
//             )
//           )}
//       </div>
//     </div>
//   );
// };

// export default DoctorList1;
