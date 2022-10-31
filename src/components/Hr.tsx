type HrProps = {
  classes?: string;
  text: string;
};

function Hr({ classes, text }: HrProps) {
  return (
    <fieldset className={`${classes ? classes : ""} border-t border-gray-300`}>
      <legend className="mx-auto px-4 text-sm italic text-gray-700 dark:text-slate-200">
        {text}
      </legend>
    </fieldset>
  );
}

export default Hr;
