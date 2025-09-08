import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => ({
    open: () => {
      dialogRef.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialogRef}
      className=" rounded-lg p-8  backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog">
        <button className="uppercase px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-100 hover:bg-stone-600 hover:font-bold w-full mt-4">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
