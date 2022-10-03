import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

const ModalBackdrop = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      onClick={onClose}
      className="fixed top-0 left-0 h-screen w-screen bg-[#000b]"
    ></div>
  );
};
const ModalContent = ({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) => {
  return (
    <div className="max-h-screen overflow-scroll py-8 max-w-md w-full fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-5 rounded-lg">
      {children}
    </div>
  );
};

const Modal = ({
  children,
  isOpen,
  onClose,
}: {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalContent onClose={onClose}>{children}</ModalContent>,
        document.getElementById("modal-content") as HTMLElement
      )}

      {ReactDOM.createPortal(
        <ModalBackdrop onClose={onClose} />,
        document.getElementById("modal-content") as HTMLElement
      )}
    </>
  );
};

export default Modal;
