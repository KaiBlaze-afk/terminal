import React, { useState } from "react";
import Whois from "./Whois";
import Help from "./help";
import Cmatrix from "./cmatrix";
import RESUME from "../assets/resume.pdf"
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

const Response = ({ value }) => {
  const [popup, setPopup] = useState(true);
  return (
    <div className="md:p-2">
      {popup && value.toLowerCase()=="whois" && <Whois setPopup={setPopup}/>}
      {value.toLowerCase()=="help" && <Help/>}
      {value.toLowerCase()=="cmatrix" && <Cmatrix/>}
      {value.toLowerCase()=="resume" && <a className="underline text-blue-500" href={RESUME} download>Download resume</a>}
      {value.toLowerCase()=="skills" && <Skills/>}
      {value.toLowerCase()=="projects" && <Projects/>}
      {value.toLowerCase()=="contact" && <Contact/>}
    </div>
  );
};

export default Response;
