import React, { FC, Fragment, ReactElement } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: ReactElement | ReactElement[];
  size?: "small" | "medium" | "large" | "full";
  position?: "center" | "top" | "bottom";
}

const Modal: FC<ModalProps> = ({
  isOpen = true,
  onClose,
  children,
  size = "medium",
  position = "center",
}) => {
  const sizeClasses = {
    small: "max-w-md",
    medium: "max-w-lg",
    large: "max-w-2xl",
    full: "max-w-full",
  };

  const positionClasses = {
    center: "items-center",
    top: "items-start pt-20",
    bottom: "items-end pb-20",
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[1000000]" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className={`flex min-h-full justify-center ${positionClasses[position]} p-4 text-center`}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={`w-full ${sizeClasses[size]} transform overflow-hidden rounded-lg bg-white p-6 text-left align-middle shadow-xl transition-all`}>
                {children}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
