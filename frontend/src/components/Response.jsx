import React, { useState } from "react";
import Whois from "./Whois";
import Help from "./help";
import Cmatrix from "./cmatrix";

const Response = ({ value }) => {
  const [popup, setPopup] = useState(true);
  return (
    <div className="p-2">
      {popup && value=="whois" && <Whois setPopup={setPopup}/>}
      {value=="help" && <Help/>}
      {value=="cmatrix" && <Cmatrix/>}
    </div>
  );
};

export default Response;
