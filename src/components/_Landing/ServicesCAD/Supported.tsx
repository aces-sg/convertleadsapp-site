import React from "react";
import Revit from "./images/revit.png";
import Autocad from "./images/autocad.png";
import Microstation from "./images/microstation.png";
import OpenBuildings from "./images/openbuildings.jpeg";
import Synchro from "./images/synchro.png";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-xxl font-semibold leading-8 text-gray-900">
          Our Favourite BIM Tools
        </h2>
        <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 filter grayscale">
          <img
            alt="Revit BIM Services"
            src={Revit}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Autocad CAD Services"
            src={Autocad}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="MicroStation CAD Services"
            src={Microstation}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
          />
          <img
            alt="OpenBuildings BIM Services"
            src={OpenBuildings}
            width={158}
            height={48}
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Synchro 4D Servicess"
            src={Synchro}
            width={158}
            height={48}
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}
