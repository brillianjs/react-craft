import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.svg?react";
import Button from "./Button";
import Input from "./Input";

const Topbar = ({ onLoginButtonClick }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center items-center py-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <p className="text-white text-sm">
          Empowering Innovation, Crafting Experiences: React Builder – Where
          Ideas Transform into Seamless Realities.💎
        </p>
      </div>
      <div className="py-4 drop-shadow-xl bg-white px-6 sticky top-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="w-7 rotate-12">
              <Logo />
            </div>
            <h1 className="text-teal-500 uppercase text-lg font-bold flex flex-col">
              ReactCraft
              <span className="font-light capitalize text-gray-500 text-sm">
                Website Builder
              </span>
            </h1>
          </div>
          <div className="max-w-lg container">
            <Input placeholder={"Search something..."}></Input>
          </div>
          <div className="flex space-x-4 justify-center items-center">
            <Link
              to="/"
              className="text-teal-500 hover:text-teal-700 transition-all"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-teal-500 hover:text-teal-700 transition-all"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="text-teal-500 hover:text-teal-700 transition-all"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="text-teal-500 hover:text-teal-700 transition-all"
            >
              Contact
            </Link>
            <Button onClick={onLoginButtonClick}>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
