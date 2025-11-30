import React, { useContext } from "react";
import { GlobalStateContext } from "../context/GlobalContextProvider";
import { GlobalDispatchContext } from "../context/GlobalContextProvider";
import Modal from "./UI/Modal";
import Button from "./UI/Button";

export const CenterLayer = ({ children, props }) => {
  const state = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);
  const { layer, centerLayerType } =
    state === null ? undefined : state;

  const { error, message } = state;

  function onClose() {
    dispatch({ type: "TOGGLE_LAYER" });
  }

  function onSubmit() {
    dispatch({ type: "START_ACTION" });
  }

  return (
    <>
      {layer ? (
        <Modal
          isOpen={layer}
          onClose={onClose}
          size="medium"
          position="center"
        >
          <div className="p-6 gap-2 w-full">
            {state.centerLayerType !== "action" ? (
              <h3 className="text-xl font-bold mb-4">
                {error ? "Oops!" : "Success!"}
              </h3>
            ) : null}
            <p className="text-gray-700 mb-6">{message || "Error detected"}</p>
            <div className="flex flex-row items-center justify-end gap-2 pt-4 pb-2">
              {state.centerLayerType.includes("action") ? (
                <div className="flex flex-row gap-2">
                  <Button
                    onClick={onClose}
                    className="bg-danger-600 text-white hover:bg-danger-700 px-4 py-2"
                  >
                    <strong>
                      {error === 400 ? "Back" : "Cancel"}
                    </strong>
                  </Button>
                  <Button
                    onClick={onSubmit}
                    className="bg-success-600 text-white hover:bg-success-700 px-4 py-2"
                  >
                    <strong>
                      {error === 400 ? "Back" : "Ok"}
                    </strong>
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={onClose}
                  primary={!error}
                  className={error ? "bg-danger-600 text-white hover:bg-danger-700" : "bg-success-600 text-white hover:bg-success-700"}
                >
                  <strong>{error === 400 ? "Back" : "Ok"}</strong>
                </Button>
              )}
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};
