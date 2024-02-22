import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import LetsConnectImage from "../public/assets/laptop.jpg";

const Contact = () => {
  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="tracking-widest uppercase text-xl text-[#164879]">
          Contact
        </p>
        <h2 className="py-4">Let's Connect</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={LetsConnectImage}
                  alt="laptop"
                />
              </div>
              <div>
                <h2 className="py-2 mt-5">Devon</h2>
                <h3 className>Junior Backend Developer</h3>
                <div className="border-b border-gray-200 mb-4">
                  <p className="w-[85%] md:w-[90%] py-4 text-sm uppercase">
                    Problem solver at the intersection of Software, Data, and
                    Cloud Computing.
                  </p>
                </div>
              </div>
              <div>
                <p className="uppercase pt-8 text-[#164879] text-center">
                  Get In Touch
                </p>
                <div className="flex items-center justify-evenly py-4 mt-10">
                  <a
                    href="https://www.linkedin.com/in/devon-j-42780924a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer p-6 rounded-full shadow-lg shadow-gray-500  hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/devjojr"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="cursor-pointer p-6 rounded-full shadow-lg shadow-gray-500 hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://formspree.io/f/xbjwyoyd"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 py-2 gap-4 w-full">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 outline-none focus:border-[#164879]"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 outline-none focus-border-[#164879]"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 outline-none focus-border-[#164879]"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 outline-none focus-border-[#164879]"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 outline-none focus-border-[#164879]"
                    rows="10"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-white mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="cursor-pointer rounded-full shadow-lg shadow-gray-400 p-4  hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#164879]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
