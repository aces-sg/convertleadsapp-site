import React, { useContext, useEffect } from "react";
import { Amplify } from "aws-amplify";
import awsmobile from "./src/aws-exports";
import GlobalContextProvider, {
  GlobalDispatchContext,
  GlobalStateContext,
} from "./src/context/GlobalContextProvider";
import { AwsRum } from "aws-rum-web";
import ServicesModal from "components/Modal/ServicesModal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

Amplify.configure(awsmobile);

export const registerServiceWorker = () => true;

export const wrapRootElement = ({ element }) => {
  return <GlobalContextProvider>{element}</GlobalContextProvider>;
};

export const wrapPageElement = ({ element, props }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const { contactLayer } = state;

  const setLayer = () => {
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: {
        contactLayer: {
          show: !contactLayer.show,
          message: "",
        },
      },
    });
  };

  return (
    <div {...props}>
      {element}
      {contactLayer.show && (
        <ServicesModal
          formTitle="Get in Touch"
          setShowModal={setLayer}
          category="question"
          msg={state.contactLayer.message}
        />
      )}
    </div>
  );
};
