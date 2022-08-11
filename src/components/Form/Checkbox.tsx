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
        className="flex-grow font-semibold ml-1 mb-1 text-gray-500"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
