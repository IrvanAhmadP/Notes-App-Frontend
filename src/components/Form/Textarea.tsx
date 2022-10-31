import Proptypes from "prop-types";

type TextareaProps = {
  label: string;
  placeholder: string;
  value: string | undefined;
  handleChange: (e: any) => void;
};

function Textarea({ label, placeholder, value, handleChange }: TextareaProps) {
  return (
    <div className="my-2">
      <label className="mb-1 block font-semibold text-gray-600 dark:text-gray-300">
        {label}
      </label>
      <textarea
        rows={7}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded border border-gray-300 bg-gray-100 p-2 outline-none ring-inset focus:ring-2 dark:border-slate-500 dark:bg-slate-700"
      />
    </div>
  );
}

Textarea.prototype = {
  label: Proptypes.string.isRequired,
  placeholder: Proptypes.string.isRequired,
  value: Proptypes.string,
  handleChange: Proptypes.func,
};

export default Textarea;
