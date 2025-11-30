import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const LogoCloud = () => {
  return (
    <div className="tw-container mt-10 md:mt-16 lg:mt-[90px]">
      <h3 className="text-gray-500 text-sm font-semibold uppercase text-center">
        Our Engineering & Construction Customers
      </h3>
      <div className="mx-auto mt-10 grid grid-cols-4 items-center gap-x-12 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-12 lg:max-w-none lg:grid-cols-5 ">
        <StaticImage
          src={`../../../assets/images/logos/abb.webp`}
          alt="abb"
          objectFit="cover"
          loading="lazy"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
        />
        <StaticImage
          src={`../../../assets/images/logos/st-engineering.png`}
          alt="engineering"
          objectFit="cover"
          loading="lazy"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
        />
        <StaticImage
          src={`../../../assets/images/logos/sj.webp`}
          alt="abb"
          objectFit="cover"
          loading="lazy"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
        />
        <StaticImage
          src={`../../../assets/images/logos/shmz.webp`}
          alt="shmz"
          objectFit="cover"
          loading="lazy"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
        />
        <StaticImage
          src={`../../../assets/images/logos/hdb.webp`}
          alt="hdb"
          objectFit="cover"
          loading="lazy"
          className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale"
        />
      </div>
    </div>
  );
};

export default LogoCloud;
