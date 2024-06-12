import React, { useState } from "react";
import Whois from "./Whois";
import Help from "./help";
import Cmatrix from "./cmatrix";
import RESUME from "../assets/resume.pdf"
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Error from "./error";

const Response = ({ value }) => {
  const [popup, setPopup] = useState(true);
  const normalizedValue = value.toLowerCase();

  return (
    <div className="md:p-2">
      {popup && normalizedValue === "whois" && <Whois setPopup={setPopup} />}
      {normalizedValue === "help" && <Help />}
      {normalizedValue === "cmatrix" && <Cmatrix />}
      {normalizedValue === "resume" && <a className="underline text-blue-500" href={RESUME} download>Download resume</a>}
      {normalizedValue === "skills" && <Skills />}
      {normalizedValue === "projects" && <Projects />}
      {normalizedValue === "contact" && <Contact />}
      {normalizedValue !== "whois" && normalizedValue !== "help" && normalizedValue !== "cmatrix" && normalizedValue !== "resume" && normalizedValue !== "skills" && normalizedValue !== "projects" && normalizedValue !== "contact" && <Error />}
    </div>
  );
};

export default Response;
