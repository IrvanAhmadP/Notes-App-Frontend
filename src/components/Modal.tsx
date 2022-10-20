import { ReactNode } from "react";
import Proptypes from "prop-types";
import { Dialog } from "@headlessui/react";

type ModalProps = {
  title?: string;
  titleColor?: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ title, titleColor, children, isOpen, onClose }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 z-20 flex items-center justify-center">
        <Dialog.Overlay
          className="fixed inset-0 bg-black/30"
          aria-hidden="true"
        />

        <Dialog.Panel className="relative m-auto w-full max-w-screen-sm rounded bg-white p-4">
          <Dialog.Title
            className={`${
              titleColor ? titleColor : ""
            } mb-2 text-xl font-semibold`}
          >
            {title}
          </Dialog.Title>

          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

Modal.prototype = {
  title: Proptypes.string,
  titleColor: Proptypes.string,
  children: Proptypes.node.isRequired,
  isOpen: Proptypes.bool.isRequired,
  onClose: Proptypes.func,
};

export default Modal;
