import React from 'react';
import userImage from '../assets/userImage.svg'

const Header = () => {
  return (
    <div className="navbar bg-slate-600 ">
      <div className="flex-1">
        <a className="btn btn-ghost text-white font-bold normal-case text-xl" href='!#'>NewShort</a>
      </div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img src={userImage} alt='nothing'/>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Header;
