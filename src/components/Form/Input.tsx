type InputProps = {
  label: string;
  error?: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
};

function Input({ label, error, placeholder, value, handleChange }: InputProps) {
  return (
    <div className="my-2">
      <label className="block font-semibold mb-1 text-gray-500">{label}</label>
      <input
        className="w-full p-2 outline-none focus:ring-2 ring-inset rounded"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <span className="text-sm text-red-400 font-bold">{error}</span>
    </div>
  );
}

export default Input;
