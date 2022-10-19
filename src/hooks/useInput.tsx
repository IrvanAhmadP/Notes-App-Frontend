import React, { useState } from "react";

function useInput(defaultValue: string = "") {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return [value, handleChange] as const;
}

export default useInput;
