import React from "react";
import { FiMenu } from "react-icons/fi";

const Nav = () => {
  return (
    <header className=" flex justify-between font-sans mt-3 mx-4 p-4">
      <img src="/Zoom_logo.svg" alt="zoom logo" className="w-44" />
      <nav className="flex justify-between ">
        <ul className="flex flex-row items-center justify-center gap-4 text-slate-700 md:hidden ">
          <li className="hover:bg-slate-500 p-2 rounded-xl hover:text-white">
            <a href="#">Resources</a>
          </li>
          <li className="hover:bg-slate-500 p-2 rounded-xl hover:text-white">
            <a href="#">Products</a>
          </li>
          <li className="hover:bg-slate-500 p-2 rounded-xl hover:text-white">
            <a href="#">Solutions</a>
          </li>
          <li className="mr-7 hover:bg-slate-500 p-2 rounded-xl hover:text-white">
            <a href="#">Plans & Pricing</a>
          </li>
        </ul>
        <div className="flex h-auto p-2 mr-20 md:hidden lg:hidden">
          <div className="bg-zoom-blue w-[3px]"></div>
        </div>
        <ul className="flex gap-3 cursor-pointer md:hidden">
          <li className="border-2 border-zoom-blue border-solid rounded-xl p-2 text-zoom-blue font-bold  hover:text-white hover:bg-zoom-blue">
            Contact Sales
          </li>
          <li className="border-2 border-zoom-blue border-solid  rounded-xl p-2 text-zoom-blue font-bold hover:text-white hover:bg-zoom-blue">
            Sign Up Free
          </li>
        </ul>
        <span className="hidden md:block md:text-4xl">
          <FiMenu />
        </span>
      </nav>
    </header>
  );
};

export default Nav;
