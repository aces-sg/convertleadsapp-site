import React, { useContext } from "react";
import { isBrowser } from "./auth";
import { ResponsiveContext, Grid } from "grommet";
import { navigate } from "gatsby";

export const detectMobile = () => {
  return isBrowser() && window.innerWidth <= 600;
};

export const Responsive = ({ children, ...props }) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      const columns = {
        small: ["auto"],
        medium: ["auto", ["50px", "auto"]],
        large: ["auto", ["50px", "auto"]],
        xlarge: ["auto", ["50px", "auto"]],
      };

      let columnsVal = columns;

      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      return (
        <Grid width="100%" columns={!columnsVal ? size : columnsVal}>
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

export const ResponsiveFull = ({ children, ...props }) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      const columns = {
        small: ["auto"],
        medium: ["auto"],
        large: ["auto"],
        xlarge: ["auto"],
      };

      let columnsVal = columns;

      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      return (
        <Grid columns={!columnsVal ? size : columnsVal}>
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

export const ResponsiveFilter = ({ children, ...props }) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      const columns = {
        small: ["auto"],
        medium: ["auto"],
        large: ["auto"],
        xlarge: ["auto"],
      };

      let columnsVal = columns;

      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      return (
        <Grid columns={!columnsVal ? size : columnsVal}>
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

export const ResponsiveCards = ({ children, ...props }) => (
  <ResponsiveContext.Consumer>
    {(size) => {
      const columns = {
        small: ["auto"],
        medium: ["33%", "33%", "auto"],
        large: ["33%", "33%", "auto"],
        xlarge: ["33%", "33%", "auto"],
      };

      let columnsVal = columns;

      if (columns) {
        if (columns[size]) {
          columnsVal = columns[size];
        }
      }

      return (
        <Grid columns={!columnsVal ? size : columnsVal} gap="medium">
          {children}
        </Grid>
      );
    }}
  </ResponsiveContext.Consumer>
);

export const size = () => {
  return useContext(ResponsiveContext);
};

export const isScreenSmall = () => {
  if (useContext(ResponsiveContext) === "small") return true;
  return false;
};

export const isScreenLarge = () => {
  if (useContext(ResponsiveContext) === "large") return true;
  return false;
};

export const displayMessage = (
  error: Boolean,
  message: String,
  dispatch: Function,
  centerLayerType: String
) => {
  dispatch({
    type: "SET_MESSAGE",
    payload: {
      centerLayerType: centerLayerType,
      error: error,
      message: message,
    },
  });
};

export const mailToInput = `mailto:tech@aces.aceplp.com.sg?&subject=IT Support Services&body=Hello IT Support, %0D%0A %0D%0A I'm interested in your services. %0D%0A %0D%0A Preferred Meeting Date: %0D%0A Preferred Meeting Time: %0D%0A Contact Number (optional):`;

export const mailToClickEvent = () => {
  navigate(mailToInput);
};

/******************************************************
  Generate Random Key
******************************************************/
export const generateKey = () => {
  return Math.random().toString().substring(2);
};

export const getImageAPIFocus = (focus) => {
  switch (focus) {
    case "Top Left":
      return "top_left";
    case "Top Center":
      return "top";
    case "Top Right":
      return "top_right";
    case "Center Left":
      return "left";
    case "Center":
      return "center";
    case "Center Right":
      return "right";
    case "Bottom Left":
      return "bottom_left";
    case "Bottom Center":
      return "bottom";
    case "Bottom Right":
      return "bottom_right";
    default:
      return "center";
  }
};

export const getReferrer = (): string => {
  if (!isBrowser()) return;
  let url = window.location.href;
  let urlObj = new URL(url);
  let queryParams = new URLSearchParams(urlObj.search);

  // Returns the name of the referrer for example, ?ref=jhona
  let paramValue = queryParams.get("ref") || "";
  console.log("paramValue", paramValue);
  return paramValue;
};
