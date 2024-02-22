import { useState } from "react";
import Image from "next/image";
import CTDCert from "../public/assets/certs_skills/ctd-cert.png";

function ViewImageCert() {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const handleImageClick = () => {
    setIsEnlarged(!isEnlarged);
  };

  return (
    <div>
      <button onClick={handleImageClick} className="mt-4 mr-8 px-8 py-2">
        View Certificate
      </button>
      {isEnlarged && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center"
          onClick={handleImageClick}
        >
          <div className="max-w-screen-md p-4">
            <Image
              src={CTDCert}
              alt="Certificate Image"
              width={600}
              height={800}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewImageCert;
