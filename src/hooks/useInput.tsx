import React, { useState } from "react";
import { isValidTitle } from "src/utils/validation";

function useInput(defaultValue: string = "") {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return [value, handleChange, handleReset] as const;
}

function useInputValidation(validation: string, defaultValue: string = "") {
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (validation === "title") {
      setError(isValidTitle(newValue).message);
    }
  };

  const handleReset = () => {
    setValue("");
  };

  return [value, error, handleChange, handleReset] as const;
}

export { useInput, useInputValidation };
