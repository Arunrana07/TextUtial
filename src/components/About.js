// import React, { useState } from "react";

// function About() {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//     border : "2px solid white"
//   });
//   const [btnText, setBtnText] = useState("Enable Dark Mode");

//   const toggleStyle = () => {
//     if (myStyle.color === "black") {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//       });
//       setBtnText("Enable light Mode")
//     } else {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setBtnText("Enable dark Mode");
//     }
//   };

//   return (
//     <div className="Container" style={myStyle}>
//       <h2>About Us</h2>
//       <p>
//         Welcome to GrowFarmer! We are dedicated to providing fresh, high-quality
//         agricultural products directly from the farm to your table. Our mission
//         is to support farmers, promote sustainable farming, and deliver healthy
//         produce to our customers.
//       </p>

//       <div className="container">
//         <button className="btn btn-primary mx-2" onClick={toggleStyle}>
//           {btnText}
//         </button>
//       </div>
//     </div>
//   );
// }

// export default About;
