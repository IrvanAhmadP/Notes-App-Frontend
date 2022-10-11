import Proptypes from "prop-types";

type CheckboxProps = {
  id: string;
  checked: boolean | undefined;
  label: string;
  handleChange: (e: any) => void;
};

function Checkbox({ id, checked, label, handleChange }: CheckboxProps) {
  return (
    <div className="my-2 flex">
      <input
        checked={checked}
        type="checkbox"
        id={id}
        onChange={handleChange}
      />
      <label
        className="ml-1 mb-1 flex-grow font-semibold text-gray-500"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

Checkbox.prototype = {
  id: Proptypes.string.isRequired,
  checked: Proptypes.bool.isRequired,
  label: Proptypes.string.isRequired,
  handleChaner: Proptypes.func,
};

export default Checkbox;
