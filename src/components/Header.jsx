import React from 'react';

const Header = () => {
  return (
    <pre className='md:w-scrren md:leading-[1.1rem] leading-[0.6rem] md:text-[1rem] text-[.5rem]'>
      {`
  /$$$$$$        /$$                               /$$
 /$$__  $$      | $$                              | $$
| $$  \\ $$  /$$$$$$$  /$$$$$$   /$$$$$$   /$$$$$$$| $$$$$$$
| $$$$$$$$ /$$__  $$ |____  $$ /$$__  $$ /$$_____/| $$__  $$
| $$__  $$| $$  | $$  /$$$$$$$| $$  \\__/|  $$$$$$ | $$  \\ $$
| $$  | $$| $$  | $$ /$$__  $$| $$       \\____  $$| $$  | $$
| $$  | $$|  $$$$$$$|  $$$$$$$| $$       /$$$$$$$/| $$  | $$
|__/  |__/ \\_______/ \\_______/|__/      |_______/ |__/  |__/
      `}
      <div className='mb-3  md:text-[1rem] text-[.7rem] md:leading-[1.1rem] leading-[0.9rem]'>
        Welcome to my terminal-based portfolio, fellow humans and bots. <br/>
        For the list of available commands, type <span className='text-blue-400'>'help'</span>.
      </div>
    </pre>
  );
};

export default Header;
