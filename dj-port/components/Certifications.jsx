import React from "react";
import Image from "next/image";
import FccBadge from "../public/assets/certs_skills/fcc-cert.png";
import AwsBadge from "../public/assets/certs_skills/aws-badge.png";
import AzureBadge from "../public/assets/certs_skills/azure.png";
import FccBadge2 from "../public/assets/certs_skills/fcc-cert2.png";

const Certifications = () => {
  return (
    <div id="certifications" className="p-2 w-full lg:h-screen">
      <div className="flex flex-col justify-center max-w-[1240px] mx-auto h-full">
        <p className="tracking-widest uppercase text-xl text-[#164879]">
          Certifications
        </p>
        <h2 className="py-4">What I've Earned</h2>
        <div className="grid grid-cols-4 lg:grid-cols-4 sm:grid-cols-1 xs:grid-cols-1 gap-8 mt-5">
          <a
            href="https://www.freecodecamp.org/certification/fccb436b151-6cf5-4f82-bd5a-6651ee8f6d22/data-analysis-with-python-v7"
            target="_blank"
            rel="noreferrer"
            className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl"
          >
            <div className="grid grid-cols-1 items-center justify-center mt-8">
              <div className="m-auto">
                <Image
                  src={FccBadge2}
                  width="64px"
                  height="64px"
                  alt="fcc badge"
                />
              </div>
            </div>
          </a>
          <a
            href="https://www.freecodecamp.org/certification/fccb436b151-6cf5-4f82-bd5a-6651ee8f6d22/scientific-computing-with-python-v7"
            target="_blank"
            rel="noreferrer"
            className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl"
          >
            <div className="grid grid-cols-1 items-center justify-center mt-8">
              <div className="m-auto">
                <Image
                  src={FccBadge}
                  width="64px"
                  height="64px"
                  alt="fcc badge"
                />
              </div>
            </div>
          </a>
          <a
            href="https://www.credly.com/badges/f3fa4a65-9d21-48a7-afd7-e45255f1ed4d"
            className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            <div className="grid grid-cols-1 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={AwsBadge}
                  width="64px"
                  height="64px"
                  alt="aws badge"
                />
              </div>
            </div>
          </a>
          <a
            href="https://www.credly.com/badges/bec216b3-d8c3-4a19-94e2-614e2530c837"
            className="p-6 hover:scale-110 ease-in duration-300 shadow-xl rounded-xl"
            target="_blank"
            rel="noreferrer"
          >
            <div className="grid grid-cols-1 items-center justify-center">
              <div className="m-auto">
                <Image
                  src={AzureBadge}
                  width="64px"
                  height="64px"
                  alt="azure badge"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
