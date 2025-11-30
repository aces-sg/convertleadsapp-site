import React, { useState, useContext } from "react";
import {
  Anchor,
  Box,
  // Menu,
  Button,
  Text,
  ResponsiveContext,
} from "grommet";
import BIMLOGO from "../assets/svgs/bim_logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const MultiLevelFooter = ({ items }) => {
  const [isShow, setIsShow] = useState(false);

  const [openMenuIndexes, setOpenMenuIndexes] = useState([]);

  const handleOpen = (index) => {
    setIsShow(true);
    setOpenMenuIndexes((prevIndexes) => [...prevIndexes, index]);
  };

  const handleClose = (index) => {
    setIsShow(false);
    setOpenMenuIndexes((prevIndexes) =>
      prevIndexes.filter((i) => i !== index)
    );
  };

  const renderItems = (menuItems) => {
    const size = useContext(ResponsiveContext);
    return (
      menuItems &&
      menuItems.map((item, index) => {
        if (item.submenus) {
          return !["xsmall", "small"].includes(size) ? (
            <ul key={index} className="btn_menu">
              <Box className="btn_menu">
                <Box direction="row" className="title">
                  {item.title}
                </Box>
                <Box direction="row">
                  <li>{renderItems(item.submenus)}</li>
                </Box>
              </Box>
            </ul>
          ) : (
            <ul key={index} className="btn_menu">
              <li>
                <div
                  className="footaccor"
                  onClick={() => {
                    openMenuIndexes.includes(index)
                      ? handleClose(index)
                      : handleOpen(index);
                  }}
                >
                  <h5>{item.title}</h5>
                  <Button className="arrowIcon">
                    {isShow && openMenuIndexes.includes(index) ? (
                      <FontAwesomeIcon
                        icon={faAngleUp}
                        color="#555"
                      />
                    ) : (
                      <FontAwesomeIcon icon={faAngleDown} />
                    )}
                  </Button>
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
                    <li>{renderItems(item.submenus)}</li>
                  )}
                </ul>
              </li>
            </ul>
          );
        }

        return (
          <Box direction="column" key={index}>
            <Anchor
              key={index}
              href={item.href}
              style={{ textDecoration: "none" }}
            >
              <Text>{item.title}</Text>
            </Anchor>
          </Box>
        );
      })
    );
  };

  return (
    <Box className="footer_container">
      <ul className="btn_menu logo">
        <BIMLOGO
          style={{ height: "140px", width: "140px" }}
          className="logo"
        />
      </ul>
      {renderItems(items)}
    </Box>
  );
};

export default MultiLevelFooter;
