import { forwardRef } from "react";

const Input = forwardRef(({ label, textarea, type }, ref) => {
  return (
    <div>
      <p>
        <label className="font-bold text-sm">{label}</label>
        {textarea ? (
          <textarea
            ref={ref}
            className="w-full h-32 border border-stone-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
          />
        ) : (
          <input
            ref={ref}
            type={type ? type : "text"}
            className="w-full border border-stone-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
          />
        )}
      </p>
    </div>
  );
});
export default Input;
