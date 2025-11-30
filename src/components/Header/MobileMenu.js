import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { navigate } from "gatsby";

const MobileMenu = ({ items, open, closeMenu }) => {
  const [openMenuIndexes, setOpenMenuIndexes] = useState([]);
  const [isShow, setIsShow] = useState(false);

  const handleClose = (href) => {
    closeMenu();
    navigate(href);
  };

  const handleMenuOpen = (index) => {
    setIsShow(true);
    setOpenMenuIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  const handleMenuClose = (index) => {
    setIsShow(false);
    setOpenMenuIndexes((prevIndexes) =>
      prevIndexes.filter((i) => i !== index)
    );
  };

  const renderItems = (menuItems) => {
    return (
      menuItems &&
      menuItems.map((item, index) => {
        if (item.items) {
          return (
            <ul key={index} className="btn_menu">
              <li>
                <div
                  className={isShow && openMenuIndexes.includes(index) ? "heading active" : "heading"}
                  onClick={() => {
                    openMenuIndexes.includes(index)
                      ? handleMenuClose(index)
                      : handleMenuOpen(index);
                  }}
                >
                  <span>{item.label}</span>
                  <button className="arrowIcon">
                    {isShow && openMenuIndexes.includes(index) ? (
                      <FontAwesomeIcon
                        icon={faAngleUp}
                        color="#555"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faAngleDown} />
                    )}
                  </button>
                </div>
                <ul
                  pad="small"
                  background="light-2"
                  className={
                    isShow && openMenuIndexes.includes(index)
                      ? "submenu active"
                      : "submenu"
                  }
                >
                  {isShow && openMenuIndexes.includes(index) && (
                    <>
                      {item.items.map((subitem, subIndex) => <li>
                        <ul key={subIndex}>
                          <li className="heading"><span>{subitem.label}</span></li>
                          {
                            subitem.items.map((submenu, sIndex) =>
                              <li key={sIndex} className="submenu_item"><a href={submenu.href}>{submenu.label}</a></li>
                            )
                          }
                        </ul>
                      </li>
                      )}
                    </>
                  )}
                </ul>
              </li>
            </ul>
          );
        }

        return (
          <button
            className="heading"
            key={index}
            onClick={() => handleClose(item.href)}
          >
            <span>{item.label}</span>
          </button>
        );
      })
    );
  };


  return (
    <>
      {open ? <div className="main_menu">{renderItems(items)}</div> : <></>}
    </>
  );
};

export default MobileMenu;
