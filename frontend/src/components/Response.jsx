import React, { useState } from "react";
import Whois from "./Whois";

const Response = ({ value }) => {
  const [about, setAbout] = useState(false);

  const toggleAbout = () => {
    setAbout(!about);
  };

  if (value === "whois" && !about) {
    toggleAbout();
  }

  return (
    <>
      <Whois value={about}/>
    </>
  );
};

export default Response;
