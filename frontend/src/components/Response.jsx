import React, { useState } from "react";
import Whois from "./Whois";
import Help from "./help";

const Response = ({ value }) => {
  const [popup, setPopup] = useState(true);
  return (
    <div className="p-2">
      {popup && value=="whois" && <Whois setPopup={setPopup}/>}
      {value=="help" && <Help/>}
    </div>
  );
};

export default Response;
