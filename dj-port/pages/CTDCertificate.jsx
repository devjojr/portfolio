import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import ViewImageCert from "@/components/ViewImageCert";
import CodeImage from "../public/assets/code-image.png";

const CTDCertificate = () => {
  return (
    <div>
      <Head>
        <title>CTD Certificate</title>
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
            src={CodeImage}
            fill
            alt="repeat calls image"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Code the Dream Certificate</h2>
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-8 py-8 max-w-[1240px] mx-auto p-2">
          <div className="col-span-4">
            <h2 className="mb-5">Description</h2>
            <p>
              Certificate of completion for Code the Dream's Node.js and Express
              course.
            </p>
            <ViewImageCert />
            <Link href="/#certifications">
              <p className="cursor-pointer underline mt-11">Go Back</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTDCertificate;
