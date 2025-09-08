import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

const Addproject = ({ handleCancel, handleSave }) => {
  const dialog = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function saveHandler() {
    const enteredTitle = (title.current?.value || "").trim();
    const enteredDescription = (description.current?.value || "").trim();
    const enteredDueDate = (dueDate.current?.value || "").trim();

    if (!enteredTitle || !enteredDescription || !enteredDueDate) {
      dialog.current?.open();
      return;
    }

    handleSave({
      enteredTitle,
      enteredDescription,
      enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={dialog}>
        <h2 className="text-center text-stone-400 font-bold uppercase">
          You entered a wrong input
        </h2>
        <p className="text-center text-stone-400 font-bold mt-4">
          Something is missing
        </p>
      </Modal>

      <div className="w-2/3 bg-stone-100 p-16 rounded-l-xl">
        <div className="flex items-center justify-center gap-5">
          <button
            onClick={handleCancel}
            className="uppercase text-stone-800 px-4 py-2 text-sm md:text-base mb-8"
          >
            cancel
          </button>
          <button
            onClick={saveHandler}
            className="uppercase px-4 py-2 text-sm md:text-base rounded-md bg-stone-700 text-stone-100 hover:bg-stone-600 hover:font-bold mb-8"
          >
            save
          </button>
        </div>

        <div>
          <Input ref={title} label="Project Name" />
          <Input ref={description} label="Project Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};

export default Addproject;
