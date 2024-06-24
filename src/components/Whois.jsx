import React, { useRef, useEffect } from "react";
import IMG from "../assets/image.webp";

const Whois = ({ setPopup }) => {
  const whoisRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (whoisRef.current && !whoisRef.current.contains(event.target)) {
        setPopup(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setPopup]);

  return (
    <div
      ref={whoisRef}
      className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-2/3 block"
    >
      <div className="head border border-[#00ff00] text-center text-xs p-1 text-black bg-[#14c910] flex justify-between md:px-2">
        <div></div>
        <div className="">About me</div>
        <button onClick={() => setPopup(false)} className="close">
          X
        </button>
      </div>
      <div className="border border-green-400 bg-[#1a1a1a] md:grid md:grid-cols-7 md:space-x-4  md:text-[1rem] text-[.5rem] md:p-6">
        <img className="md:w-[90%] m-auto col-span-2" src={IMG} alt="" />
        <div className="data border border-green-400 col-span-5 p-5">
          <div className="md:text-xs text-xs h-40 md:h-[100%] md:overflow-hidden overflow-y-scroll">
            About <span className="text-3xl">Adarsh</span>
            <br />
            Hi, I'm Adarsh Kumar,
            <br /> student pursuing my Bachelor's of Engineering in Computer
            Science and Engineering. <br />
            Originally from Patna, Bihar, I'm currently based in Davangere,
            immersed in my studies.
            <br />
            During my journey, I've delved into various aspects of software
            development, particularly enjoying full-stack projects.
            <br />
            Proficient in Python, I handle both front-end technologies like
            React and Tailwind CSS, and back-end frameworks like Node.js.
            Additionally, I have experience in writing shell scripts. I'm a
            self-learner, relying on real-world projects and online resources to
            expand my skills. <br />
            My short-term goal is to complete at least 100 real-world projects,
            while my long-term aspiration is to venture into the field of Cyber
            Security. Beyond my academic pursuits, I'm an avid video gamer. I
            believe in reaching new possibilities through technology and
            approach my projects with curiosity, always seeking innovative
            solutions. I'm driven by the philosophy of exploring new horizons
            and leveraging technology to its fullest potential.
            <br />
            <br />
            You can connect to me through:
            <br />
            <a className="text-blue-500" href="https://linkedin.com">
              LinkedIn
            </a>
            <br />
            <a className="text-blue-500" href="https://github.com/KaiBlaze-afk">
              GitHub
            </a>
            <br />
            <a className="text-blue-500" href="https://twitter.com/">
              Twitter
            </a>
            <br />
            <br />
            Click anywhere outside to close this window.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whois;
