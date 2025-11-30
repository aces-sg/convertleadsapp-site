import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { Box, Button, ResponsiveContext } from "grommet";
import * as LR from "@uploadcare/blocks";
import "./files.scss";

LR.FileUploaderRegular.shadowStyles = /* CSS */ `
  :host lr-simple-btn button {
    background-color: #0061fe !important;
    min-height: 40px;
    color: white;
    font-size: 18px !important;
    font-family: Inter;
  }

  :host lr-drop-area {
    // background: #0061fe;
    // color: white;
    // min-height: 40px;
  }

  :host lr-copyright {
    display: none;
  }
`;

const ActionButton = (props) => {
  const { item, handleFiles } = props;

  //some code...
  let changingDropdownRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //some code...
  const handleClick = (e) => {
    if (changingDropdownRef.current === null) {
      changingDropdownRef.current = e.currentTarget;
      e.currentTarget.nextElementSibling.style.display = "block";
    } else {
      changingDropdownRef.current.nextElementSibling.style.display =
        "none";
      changingDropdownRef.current = null;
    }
  };

  const closePopup = () => {
    changingDropdownRef.current.nextElementSibling.style.display =
      "none";
    changingDropdownRef.current = null;
  };

  function handleClickOutside(e) {
    if (
      changingDropdownRef.current != null &&
      !changingDropdownRef.current.contains(e.target) &&
      !changingDropdownRef.current.parentNode.contains(e.target)
    ) {
      changingDropdownRef.current.nextElementSibling.style.display =
        "none";
      changingDropdownRef.current = null;
    }
  }

  const handleDownload = (e, item) => {
    e.preventDefault();

    fetch(item.cdnUrl, {
      method: "GET",
      headers: {
        "Content-Type": item.mimeType,
      },
    })
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));

        const link = document.createElement("a");
        link.href = url;
        link.download = item.name;

        document.body.appendChild(link);

        link.click();

        link.parentNode.removeChild(link);
      });
    closePopup();
  };

  const removeFile = (id) => {
    const filesObj = localStorage.getItem("files");
    const currentFiles = JSON.parse(filesObj);
    if (currentFiles.length) {
      const newFiles = currentFiles.filter((it) => it.uuid !== id);
      console.log("newFiles", newFiles, id);

      handleFiles(newFiles);
    }
  };

  return (
    //some code...
    <div className="actionContainer">
      <div
        onClick={(e) => handleClick(e)}
        style={{
          cursor: "pointer",
          fontSize: "18px",
          fontWeight: 800,
          lineHeight: "14px",
        }}
      >
        ...
      </div>
      {/* <MoreVertIcon fontSize="small"  /> */}
      <div
        style={{
          position: "fixed",
          display: "none",
          zIndex: "10",
          right: 10,
        }}
      >
        <Box className="popup">
          <ul>
            <li onClick={(e) => handleDownload(e, item)}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="m17.015 11.044-1.03-1.088-3.485 3.3V5.5H11v7.757L7.516 9.956l-1.032 1.088 5.266 4.989 5.265-4.989ZM19 17.5H4.5V19H19v-1.5Z"
                  fill="currentColor"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
              Download
            </li>
            <li onClick={() => removeFile(item.uuid)}>
              {/* <a href="" ></a> */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="dig-UIIcon dig-UIIcon--standard"
                width="24"
                height="24"
                role="presentation"
                focusable="false"
              >
                <path
                  d="M19.5 7h-4v-.75A2.25 2.25 0 0 0 13.25 4h-2.997a2.25 2.25 0 0 0-2.25 2.255V7H4v1.5h1.591l1.245 9.541A2.256 2.256 0 0 0 9.067 20h5.366a2.256 2.256 0 0 0 2.231-1.959L17.908 8.5H19.5V7Zm-9.997-.75a.75.75 0 0 1 .75-.75h2.997a.75.75 0 0 1 .75.75V7H9.505l-.002-.75Zm5.674 11.595a.75.75 0 0 1-.744.655H9.067a.75.75 0 0 1-.744-.654L7.104 8.5h9.292l-1.219 9.345Z"
                  fill="currentColor"
                  vector-effect="non-scaling-stroke"
                ></path>
              </svg>
              Delete
            </li>
            <li>
              <svg
                fill="none"
                height="16px"
                width="24px"
                viewBox="0 0 512 512"
              >
                <path
                  d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
                  fill="currentColor"
                />
              </svg>
              Comment
            </li>
          </ul>
        </Box>
      </div>
    </div>
  );
};

export default ActionButton;
