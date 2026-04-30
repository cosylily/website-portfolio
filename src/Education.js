import React from "react";
import "./App.css";

export default function Education() {
  return (
    <div className="educationsection">
      <h2 className="maintitle">Education</h2>
      <img
        src="/grad.jpg"
        alt="doodle graduation"
        width="300px"
        height="auto"
        className="graduationimg"
      />
      <p>2020-2022 A-levels in Kolej Mara Seremban</p>
      <p>
        2022-2025 BA (Hons) Politics, Philosophy and Economics in University of
        Manchester
      </p>
      <p>2024-2025 Front-end Diploma with Shecodes</p>
      <p>
        2025-2026 Prompt Engineering with TalentLabs MyMahir FSTC GBS
        Train-and-Place Programme 2025 (Incomplete)
      </p>
      <p>2025-2026 Digital Marketing with Acadium (Incomplete)</p>
    </div>
  );
}
