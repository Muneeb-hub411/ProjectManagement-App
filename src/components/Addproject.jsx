import Input from "./Input.jsx";
import { useRef } from "react";

const Addproject = ({ handleCancel, handleSave }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  function saveHandler() {
    const addSave = {
      enteredTitle: title.current.value,
      enteredDescription: description.current.value,
      enteredDueDate: dueDate.current.value,
    };
    handleSave(addSave);
  }

  return (
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
        <Input ref={dueDate} label="Due Date" type={"date"} />
      </div>
    </div>
  );
};

export default Addproject;
