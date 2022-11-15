import React from "react";
import MyHeader from "../MyHeader/MyHeader";
import { TypeAnimation } from "react-type-animation";

import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <MyHeader navigatePath="/contact" btnText="Say Hello!" />
      <div className="container">
        <div className="hero">
          {/* /// */}
          <TypeAnimation
          className="title"
            sequence={[
              1000,
              "React, Artificial Intelligence & Data Science", // Types 'One'
              // 1000, // Waits 1s
              // 'Artificial Intelligence', // Deletes 'One' and types 'Two'
              // 2000, // Waits 2s
              // 'Data Science', // Types 'Three' without deleting 'Two'
              () => {
                console.log("Done typing!"); // Place optional callbacks anywhere in the array
              },
            ]}
            speed={30}
            wrapper="h1"
            cursor={true}
            repeat={1}
            // style={{ fontSize: "2.8rem", textAlign: "center" }}
          />

          {/* /// */}

          {/* <h1 className="title">
            React, Artificial Intelligence & Data Science
          </h1> */}
          <h2 className="sub-title">
            i build responsive web and mobile apps using React and I love
            anything that's challanging
          </h2>
          <img
            className="hero-image"
            src={require("../../images/hello.png")}
            alt=""
          />

          {/* <img
            className="hero-image"
            src={require("../../images/firmware.png")}
            alt=""
          /> */}
        </div>
      </div>
      <div className="info">
        <span className="info-title">Hello!, i'm Arunchandra Boini</span>
        <span className="info-description">
          I wanted to build a user-friendly interface for machine learning
          applications all by myself. So, I've started learning web development. 
          I'm an aspiring fullstack developer and also pursuing a bachelors in
          Artificial Intelligence and Data Science. An internship as a software
          developer where I have developed websites and mobile apps using React
          gave me a push to build what I wanted.
        </span>
      </div>
    </>
  );
};

export default HomePage;
// I'm an aspiring fullstack developer, i build responsive web and mobile apps using React and also a skilled
//             bachelor in Artificial Intelligence and Data Science
