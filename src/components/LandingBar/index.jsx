import React, { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ZenLogo from "@/assets/ZenLogo.png";
import IndFlag from "@/assets/IDFlag.svg";
import { useRouter } from "next/router";
import { PiHamburger } from "react-icons/pi";
import { Button } from "@chakra-ui/react";

export default function LandingBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-[#F8F9FA] fixed z-10 top-0 w-full py-3 lg:py-6 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between shadow-md">
        <div className="flex flex-row items-center justify-between w-full lg:w-auto">
          <span
            className="flex flex-row justify-center items-center space-x-2 cursor-pointer"
            onClick={() => router.push("/dashboard")}
          >
            <Image
              alt="logo calm zen space"
              src={ZenLogo}
              className="object-contain w-10 h-10 lg:w-16 lg:h-16"
            />
            <p className="font-bold text-lg lg:text-xl text-teal-700 uppercase">
              Calm Zen Space
            </p>
          </span>
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            {/* Add your mobile menu icon here */}
            <Button variant={"ghost"} colorScheme="teal" duration={300}>
              <PiHamburger />
            </Button>
          </div>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row justify-between lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <div className="flex max-lg:flex-row max-lg:space-x-5 space-x-10 max-sm:flex-col space-y-4 lg:space-y-0">
            <NavLink
              path="/"
              currentPath={pathname}
              onClick={closeMenu}
              router={router}
            >
              Home
            </NavLink>
            <NavLink
              path="/faq"
              currentPath={pathname}
              onClick={closeMenu}
              router={router}
            >
              FAQ
            </NavLink>
            <NavLink
              path="/blog"
              currentPath={pathname}
              onClick={closeMenu}
              router={router}
            >
              Blog
            </NavLink>
            <NavLink
              path="/about-us"
              currentPath={pathname}
              onClick={closeMenu}
              router={router}
            >
              About Us
            </NavLink>
          </div>
        </div>
        <div
          className="cursor-pointer border-2 border-white hover:border-teal-500 hover:shadow-md text-bold px-4 py-2 transition-all duration-200 ease-in-out rounded-full max-sm:hidden max-md:hidden"
          onClick={() => router.push("/login")}
        >
          <p className="text-teal-500 font-bold">Login</p>
        </div>
      </nav>
    </>
  );
}

// Helper component for navigation links
const NavLink = ({ path, currentPath, onClick, children, router }) => (
  <span
    className={` ${
      currentPath === path
        ? "bg-white text-teal-500 font-bold"
        : "text-gray-400"
    } cursor-pointer lg:hover:bg-white lg:hover:text-black lg:hover:font-bold lg:transition-all lg:duration-300`}
    onClick={() => {
      router.push(path);
      onClick();
    }}
  >
    {children}
  </span>
);
