import React from "react";
import "./App.css";
import "./certificates.css";

export default function Certs() {
  return (
    <div>
      <h2>Certifications of Coding Skills</h2>
      <div className="certificates">
        <img
          src="/cert1.png"
          alt="Introduction to Coding Skills Certificate of completion."
        />
        <img
          src="/cert3.png"
          alt="Web Development Certificate of completion."
        />
        <img
          src="/cert4.png"
          alt="Introduction to Python Development Certificate of completion"
        />
        <img
          src="/cert5.png"
          alt="Advanced Python Development Certificate of completion"
        />
        <img
          src="/cert6.png"
          alt="Responsive Web Development Certificate of Completion"
        />
        <img
          src="/cert7.png"
          alt="Advanced Responsive Web Development Certificate of Completion"
        />
        <img
          src="/cert8.png"
          alt="React Development Certificate of Completion"
        />
        <img
          src="/cert9.png"
          alt="Advanced React Development Certificate of Completion"
        />
      </div>
    </div>
  );
}
