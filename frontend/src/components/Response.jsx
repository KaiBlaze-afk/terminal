import React, { useState } from "react";
import Whois from "./Whois";
import Help from "./help";
import Cmatrix from "./cmatrix";
import RESUME from "../assets/resume.pdf"
import Skills from "./Skills";
import Projects from "./Projects";

const Response = ({ value }) => {
  const [popup, setPopup] = useState(true);
  return (
    <div className="p-2">
      {popup && value=="whois" && <Whois setPopup={setPopup}/>}
      {value=="help" && <Help/>}
      {value=="cmatrix" && <Cmatrix/>}
      {value=="resume" && <a className="underline text-blue-500" href={RESUME} download>Download resume</a>}
      {value=="skills" && <Skills/>}
      {value=="projects" && <Projects/>}
      {value=="contact" && <Contact/>}
    </div>
  );
};

export default Response;
