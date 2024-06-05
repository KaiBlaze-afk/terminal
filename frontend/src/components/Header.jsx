import React from 'react';

const Header = () => {
  return (
    <pre className=' ' style={{ whiteSpace: 'pre' }}>
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
      <div className='mb-3'>
        Welcome to my terminal-based portfolio, fellow humans and bots. <br/>
        For the list of available commands, type <span className='text-blue-400'>'help'</span>.
      </div>
    </pre>
  );
};

export default Header;
