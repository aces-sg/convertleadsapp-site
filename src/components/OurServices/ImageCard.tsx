import React, { useState } from "react";
import { navigate } from "gatsby";
import { useAnalytics } from "hooks/useAnalytics";

interface ImageCardProps {
  id: string;
  title: string;
  mobileTitle?: string;
  imageSrc: string;
  href: string;
  category?: '2D' | '3D' | 'Convert' | 'Professional Services';
}

const ImageCard: React.FC<ImageCardProps> = ({ id, title, mobileTitle, imageSrc, href, category = 'Professional Services' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { trackClick } = useAnalytics();

  const handleClick = () => {
    // Track click using the element ID as the primary identifier
    trackClick('service_card_click', {
      event_category: 'services',
      event_label: `home-${id}`, // Prefix with page name
      service_category: category,
      service_url: href,
    });
    navigate(href);
  };

  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-[20px] transition-all duration-300 h-[200px] sm:h-[250px] md:h-[300px] ${
        isHovered ? 'ring-2 ring-yellow-400' : 'border border-[#4B5563]'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? '0 0 0 2px #FACC15' : '0 0 0 1px #4B5563',
      }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imageSrc})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      <div className={`absolute bottom-0 left-0 p-6 w-full transition-transform duration-300 ${
        isHovered ? 'transform -translate-y-4' : ''
      }`}>
        <h3 className="text-xl font-semibold text-white">
          <span className="sm:hidden">{mobileTitle || title}</span>
          <span className="hidden sm:inline">{title}</span>
        </h3>

        {isHovered && (
          <button
            className="mt-4 text-black bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
            onClick={handleClick}
          >
            Learn More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default ImageCard;
