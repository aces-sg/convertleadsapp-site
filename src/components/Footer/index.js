import React from "react";
import { navigate } from "gatsby";
import footerLink from "./footer.json";
import { FaInbox, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Bimeco from "assets/svgs/bemico.svg";
import { useSiteMetadata } from "hooks/use-site-metadata";
import "./footer.css";

import FooterImage1 from "assets/images/footer/1.png";
import FooterImage2 from "assets/images/footer/2.png";
import FooterImage3 from "assets/images/footer/3.png";

let viewerUrl = process.env.GATSBY_VIEWER_URL;

footerLink.account.forEach((service) => {
  if (service.label === "Free IFC Viewer") {
    service.link = viewerUrl;
  }
});

const FooterCard = () => {
  const year = new Date().getFullYear();
  const { contact, social, business } = useSiteMetadata();

  // Build URLs from config data
  const waUrl = `https://wa.me/${contact.whatsapp}`;
  const emailUrl = `mailto:${contact.email}?Subject=BIM%20Service%20Enquiry`;

  return (
    <footer className="py-10 bg-white md:py-16">
      <div className="tw-container">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
          <div className="lg:w-[250px] mt-4">
            <Bimeco onClick={() => navigate('/')} className="w-auto cursor-pointer transition-opacity duration-300 hover:opacity-80" />

            <div className="text-sm text-gray-500 ">
              Tel: <span>{contact.phone}</span>
            </div>
            <div className="text-sm text-gray-500 my-2">
              <span>{contact.address.full}</span>
            </div>

            <div className="flex flex-row gap-6 mt-4">
              <a
                href={social.linkedIn}
                className="text-black transition-all duration-300 ease-in-out hover:cursor-pointer hover:opacity-80"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href={emailUrl}
                target="_blank"
                className="text-black transition-all duration-300 ease-in-out hover:cursor-pointer hover:opacity-80"
              >
                <IoIosMail size={20} />
              </a>
              <a
                href={waUrl}
                target="_blank"
                className="text-black transition-all duration-300 ease-in-out hover:cursor-pointer hover:opacity-80"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-start justify-between w-full gap-8 lg:flex-1 md:flex-row footer-links-container">
            <div>
              <p className="text-gray-400 text-sm font-semibold tracking-[0.7px] uppercase mb-3 md:mb-4">
                Services
              </p>
              <ul className="flex flex-col gap-2 list-none md:gap-3 lg:gap-4">
                {footerLink.services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.link}
                      className="text-sm text-gray-700 transition-all duration-300 ease-in-out md:text-base hover:cursor-pointer"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-semibold tracking-[0.7px] uppercase mb-3 md:mb-4">
                Solutions
              </p>
              <ul className="flex flex-col gap-2 list-none md:gap-3 lg:gap-4">
                {footerLink.solutions.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.link}
                      className="text-sm text-gray-700 transition-all duration-300 ease-in-out md:text-base hover:cursor-pointer"
                    >
                      {service.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-gray-400 text-sm font-semibold tracking-[0.7px] uppercase mb-3 md:mb-4">
                Company
              </p>
              <ul className="flex flex-col gap-2 list-none md:gap-3 lg:gap-4">
                {footerLink.company.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-sm text-gray-700 transition-all duration-300 ease-in-out md:text-base hover:cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-gray-400 text-sm font-semibold tracking-[0.7px] uppercase mb-3 md:mb-4">
                Quick Links
              </p>
              <ul className="flex flex-col gap-1 list-none md:gap-2 lg:gap-2">
                {footerLink.account.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-sm text-gray-700 transition-all duration-300 ease-in-out md:text-base hover:cursor-pointer"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-images-row">
              <div className="left-column">
                <img
                  src={FooterImage2}
                  alt="Footer Image 2"
                  className="footer-image"
                />
                <img
                  src={FooterImage1}
                  alt="Footer Image 1"
                  className="footer-image"
                />
              </div>
              <div className="right-column">
                <img
                  src={FooterImage3}
                  alt="Footer Image 3"
                  className="footer-image"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pt-8 border-0 border-t border-gray-200 border-solid mt-11">
          <p className="mb-0 text-sm text-center text-gray-400 md:text-base">
            ©{year} {contact.company} | {business.registrationType}: {business.registrationNumber}
          </p>
        </div>
      </div>
    </footer >
  );
};

export default FooterCard;

// Backward compatibility exports (deprecated - use useSiteMetadata hook instead)
// These are now set from the site-config.yaml file
export const waUrl = `https://wa.me/6580834020`;  // Default SG number
export const geoPhoneNumber = "+65 80834020";  // Default SG number
