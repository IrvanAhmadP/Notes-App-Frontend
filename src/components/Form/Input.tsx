type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
};

function Input({ label, placeholder, value, handleChange }: InputProps) {
  return (
    <div className="my-2">
      <label className="block font-semibold mb-1 text-gray-500">{label}</label>
      <input
        className="w-full p-2 outline-none focus:ring-2 ring-inset rounded"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
