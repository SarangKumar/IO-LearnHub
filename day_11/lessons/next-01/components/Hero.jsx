import Image from "next/image";
import React from "react";

const Hero = ({ children, url, alt }) => {
  return (
    <div>
      <Image
        src={url}
        width={900}
        height={400}
        alt={alt}
        className="py-4 w-full object-cover h-[200px] rounded"
      />
      <main className="text-red-500">{children}</main>
    </div>
  );
};

export default Hero;
