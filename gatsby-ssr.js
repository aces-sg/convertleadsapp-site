const React = require("react");
const Layout = require("./src/components/Layout").default;
const GlobalContextProvider =
  require("./src/context/GlobalContextProvider").default;

// Fix Grommet SSR issue - Make React globally available during SSR
global.React = React;

exports.wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

