import React from 'react';

const Projects = () => {
  return (
    <div className="">
        <div className="mb-4">Here's my list of Projects:</div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Project 1: ChatFlow</h3>
        <p>Description:</p>
        <p className="ml-4">
          A web application which can be used to chat in real time and also share all forms of data.
        </p>
        <p>Technologies Used:</p>
        <ul className="list-disc ml-8">
          <li>HTML, CSS, JS</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Socket.io</li>
        </ul>
        <p>Link:</p>
        <a href="https://github.com/KaiBlaze-afk/ChatFlow2" className="text-blue-400 underline ml-4">
        https://github.com/KaiBlaze-afk/ChatFlow2
        </a>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Project 2: Diary WebApp</h3>
        <p>Description:</p>
        <p className="ml-4">
          It's a web application in which you can store your diary entries; it uses advanced encryption techniques.
        </p>
        <p>Technologies Used:</p>
        <ul className="list-disc ml-8">
          <li>React.js</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>Encryption Libraries: JWT, Bcrypt</li>
        </ul>
        <p>Link:</p>
        <a href="https://github.com/KaiBlaze-afk/DiaryWebApp" className="text-blue-400 underline ml-4">
          https://github.com/KaiBlaze-afk/DiaryWebApp
        </a>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Project 3: ChatGpt-Script</h3>
        <p>Description:</p>
        <p className="ml-4">
          This is a basic shell script which is used to interact with ChatGpt in fun ways.
        </p>
        <p>Technologies Used:</p>
        <ul className="list-disc ml-8">
          <li>Shell Script</li>
        </ul>
        <p>Link:</p>
        <a href="https://github.com/KaiBlaze-afk/ChatGPT-script" className="text-blue-400 underline ml-4">
          https://github.com/KaiBlaze-afk/ChatGPT-script
        </a>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Project 4: KeyBoard Rush</h3>
        <p>Description:</p>
        <p className="ml-4">
          A simple webpage which calculates your typing speed based on tests and also uses localStorage to decide the rankings.
        </p>
        <p>Technologies Used:</p>
        <ul className="list-disc ml-8">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <p>Link:</p>
        <a href="https://github.com/KaiBlaze-afk/KeyBoard_Rush" className="text-blue-400 underline ml-4">
          https://github.com/KaiBlaze-afk/KeyBoard_Rush
        </a>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Project 5: WebStream</h3>
        <p>Description:</p>
        <p className="ml-4">
          A Python-based program to share the live video stream from a pc to a web application using socket.io.
        </p>
        <p>Technologies Used:</p>
        <ul className="list-disc ml-8">
          <li>Python</li>
          <li>Nodejs</li>
          <li>Socket io</li>
        </ul>
        <p>Link:</p>
        <a href="https://github.com/KaiBlaze-afk/WebStream" className="text-blue-400 underline ml-4">
          https://github.com/KaiBlaze-afk/WebStream
        </a>
      </div>
And many more...
    </div>
  );
};

export default Projects;
