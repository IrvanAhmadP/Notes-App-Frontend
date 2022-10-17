import Proptypes from "prop-types";

type InputProps = {
  type?: string;
  label: string;
  error?: string;
  placeholder: string;
  value: string | undefined;
  handleChange: any;
};

function Input({
  type = "text",
  label,
  error,
  placeholder,
  value,
  handleChange,
}: InputProps) {
  return (
    <div className="my-2">
      <label className="mb-1 block font-semibold text-gray-500">{label}</label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded p-2 outline-none ring-inset focus:ring-2"
      />
      <span className="text-sm font-bold text-red-400">{error}</span>
    </div>
  );
}

Input.prototype = {
  label: Proptypes.string.isRequired,
  error: Proptypes.string,
  placeholder: Proptypes.string.isRequired,
  handleChange: Proptypes.func,
};

export default Input;
