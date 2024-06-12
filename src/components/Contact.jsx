import React from "react";

const Contact = () => {
  return (
    <div className="p-1">
      <p className="mb-4">
        Feel free to reach out to me through any of the following channels:
      </p>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Email</h3>
        <p className="ml-4">
          <a
            href="mailto:kumaradarshh5@gmail.com"
            className="text-blue-400 underline"
          >
            kumaradarshh5@gmail.com
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">LinkedIn</h3>
        <p className="ml-4">
          <a
            href="https://www.linkedin.com/in/adarsh-kumar-0516261b4/"
            className="text-blue-400 underline"
          >
            https://www.linkedin.com/in/adarsh-kumar-0516261b4/
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">GitHub</h3>
        <p className="ml-4">
          <a
            href="https://github.com/kaiblaze-afk"
            className="text-blue-400 underline"
          >
            github.com/kaiblaze-afk
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Twitter</h3>
        <p className="ml-4">
          <a href="https://x.com/Blaze8Kai" className="text-blue-400 underline">
            https://x.com/Blaze8Kai
          </a>
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold">Phone</h3>
        <p className="ml-4">
          <a href="tel:+919844147719" className="text-blue-400 underline">
            +91 9844147719
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;
