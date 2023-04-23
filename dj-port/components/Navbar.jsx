import { React, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBarLogo from "../public/assets/djLogo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [navBar, setNavBar] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [textLinkColor, setTextLinkColor] = useState("#141b24");

  const handleNav = () => {
    setNavBar(!navBar);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: "white" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2">
        <Link href="/">
          <Image
            src={NavBarLogo}
            alt="/"
            width={96}
            height={48}
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${textLinkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#164879]">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#164879]">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#164879]">
              <Link href="/#certifications">Certifications</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#164879]">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#164879]">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b hover:border-[#164879]">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>

          <div
            style={{ color: `${textLinkColor}` }}
            onClick={handleNav}
            className="cursor-pointer md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* side nav */}

      <div
        className={
          navBar
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navBar
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] xs:w-[65%] md:w-[45%] h-screen bg-[white] p-10 ease-in duration-700"
              : "fixed left-[-150%] top-0 p-10 ease-in duration-400"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavBarLogo} width="96" height="48" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-500 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-200 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-sm">
                Passionate About Building High-Quality Software That Makes A
                Difference
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNavBar(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNavBar(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#certifications">
                <li onClick={() => setNavBar(false)} className="py-4 text-sm">
                  Certifications
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNavBar(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNavBar(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNavBar(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#164879]">
                Get In Touch
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://github.com/devjojr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/jr-j-42780924a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-200">
                    <FaLinkedinIn />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNavBar(!navBar)}
                    className="rounded-full shadow-lg shadow-gray-500 p-4 cursor-pointer hover:scale-105 ease-in duration-200"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
