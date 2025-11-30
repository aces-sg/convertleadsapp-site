import React, { FC, ReactElement, useContext } from "react";
import { GlobalDispatchContext } from "../../context/GlobalContextProvider";
import Modal from "../UI/Modal";

interface CustomModalProps {
  children: ReactElement;
}

const CustomModal: FC<CustomModalProps> = ({ children }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const handleClose = () => {
    dispatch({
      type: "TOGGLE_CONTACT",
      payload: {
        contactLayer: false,
      },
    });
  };
  return (
    <Modal isOpen={true} onClose={handleClose} size="medium">
      {children}
    </Modal>
  );
};

export default CustomModal;
