import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import crmAppImage from "../public/assets/projects/crm-app.png";
import { RiRadioButtonFill } from "react-icons/ri";

const CRMApp = () => {
  return (
    <div>
      <Head>
        <title>Client Relationship Management</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full">
        <div className="relative w-screen h-[50vh]">
          <div className="absolute w-full h-[50vh] top-0 left-0 bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            style={{ objectFit: "cover" }}
            src={crmAppImage}
            fill
            alt="client relationship image"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Client Relationship Management</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 py-8 max-w-[1240px] mx-auto p-2">
          <div className="col-span-4">
            <h2 className="mb-5">Description</h2>
            <p>
              This project is a server-side EJS application built with Node.js
              and Express.js, featuring CRUD functionality for managing clients
              and MongoDB for data storage. It includes error handling, user
              authentication, and styled with Tailwind CSS.
            </p>
            <a
              href="https://github.com/devjojr/crm-app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-4 mr-8 px-8 py-2">Code</button>
            </a>
            <a
              href="https://crm-app-prod.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              <button className="mt-4 mr-8 px-8 py-2">Visit App</button>
            </a>
          </div>

          <div className="py-4 rounded-xl col-span-4 md:col-span-1 shadow-xl shadow-gray-400">
            <div className="p-2">
              <p className="pb-2 text-center font-bold">Skills Demonstrated</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="flex items-center py-2">
                  <RiRadioButtonFill className="pr-1" /> Node.js
                </p>
                <p className="flex items-center py-2">
                  <RiRadioButtonFill className="pr-1" /> Express.js
                </p>
                <p className="flex items-center py-2">
                  <RiRadioButtonFill className="pr-1" /> MongoDB
                </p>
                <p className="flex items-center py-2">
                  <RiRadioButtonFill className="pr-1" /> Mongoose
                </p>
                <p className="flex items-center py-2">
                  <RiRadioButtonFill className="pr-1" /> EJS
                </p>
                <p className="flex items-center py-2">
                  <RiRadioButtonFill className="pr-1" /> Tailwind CSS
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="cursor-pointer underline">Go Back</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CRMApp;
