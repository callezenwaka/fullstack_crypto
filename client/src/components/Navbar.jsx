import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import logo from "../../images/logo.svg";

const Navbar = () => {

  const { handleLogout, address } = useContext(TransactionContext);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4" style={{justifyContent: "space-between"}}>
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" title="Crypto Xchange" className="w-32 cursor-pointer logo" />
      </div>
      <ul className="text-white md:flex list-none flex-row justify-between items-center flex-initial">
        {!address && (
          <button 
            type="button"
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white text-base font-semibold"
          >
            Connect
          </button>
        )}
        
        {address && (
          <button 
            type="button"
            onClick={ handleLogout }
            className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd] text-white text-base font-semibold"
          >
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;