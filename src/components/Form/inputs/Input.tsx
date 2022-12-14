import Proptypes from "prop-types";

type InputProps = {
  type?: string;
  label?: string;
  name: string;
  value: string | undefined;
  error?: string;
  placeholder: string;
  handleChange: any;
};

function Input({
  type = "text",
  label,
  name,
  value,
  error,
  placeholder,
  handleChange,
}: InputProps) {
  return (
    <div className="my-2">
      <label className="mb-1 block font-semibold text-gray-600 dark:text-gray-300">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded border border-gray-300 bg-gray-100 p-2 outline-none ring-inset focus:ring-2 dark:border-slate-500 dark:bg-slate-700"
      />
      <span className="text-sm font-bold text-red-400 dark:text-red-300">
        {error}
      </span>
    </div>
  );
}

Input.prototype = {
  label: Proptypes.string,
  name: Proptypes.string.isRequired,
  value: Proptypes.string,
  error: Proptypes.string,
  placeholder: Proptypes.string.isRequired,
  handleChange: Proptypes.func,
};

export default Input;
