import React, { useEffect, useRef } from "react";
import { Button, ButtonType } from "../ui/Button";
import { MdClose } from "react-icons/md";

// create modal props interface
interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
}

export function MobileMenuModal(props: ModalProps) {
  const { children, show, setShow } = props;

  const modalContent = useRef(null);

  const clickHandler = (e: HTMLElement) => {
    if (!show || modalContent.current == e) return;
    setShow(false);
  };

  // close the modal on click outside
  useEffect(() => {
    document.addEventListener("click", () => clickHandler);
    return () => document.removeEventListener("click", () => clickHandler);
  });

  // close the modal if the esc key is pressed
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (e.keyCode !== 27) return;
      setShow(false);
    };
    document.addEventListener("keydown", keyHandler);

    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className={`${show ? "fixed" : "hidden"}`}>
      {/* Modal backdrop */}
      <div
        onClick={() => setShow(false)}
        className="fixed inset-0 z-50 bg-black bg-opacity-30 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal context */}
      <div
        onClick={() => setShow(false)}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
      >
        {/* close button (X)
        <div className="fixed top-0 left-1/2 z-50 -translate-x-1/2">
          <Button onClick={() => setShow(false)} type={ButtonType.Link}>
            <MdClose className="text-white text-5xl" />
          </Button>
        </div> */}
        <div
          className="flex justify-center overflow-auto max-w-6xl w-full max-h-full"
          ref={modalContent}
        >
          <div className="border border-transparent">{children}</div>
        </div>
      </div>
    </div>
  );
}
