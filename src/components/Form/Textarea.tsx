type TextareaProps = {
  label: string;
  placeholder: string;
  value: string | undefined;
  handleChange: (e: any) => void;
};

function Textarea({ label, placeholder, value, handleChange }: TextareaProps) {
  return (
    <div className="my-2">
      <label className="mb-1 block font-semibold text-gray-500">{label}</label>
      <textarea
        className="w-full rounded p-2 outline-none ring-inset focus:ring-2"
        rows={7}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Textarea;
