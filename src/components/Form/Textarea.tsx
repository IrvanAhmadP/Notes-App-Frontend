type TextareaProps = {
  label: string;
  placeholder: string;
  value: string;
  handleChange: (e: any) => void;
};

function Textarea({ label, placeholder, value, handleChange }: TextareaProps) {
  return (
    <div className="my-2">
      <label className="block font-semibold mb-1 text-gray-500">{label}</label>
      <textarea
        className="w-full p-2 outline-none focus:ring-2 ring-inset rounded"
        rows={7}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Textarea;
