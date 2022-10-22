function isValidTitle(val: string) {
  const MIN = 5;

  if (val.length < MIN) {
    return {
      valid: false,
      message: "Invalid name format",
    };
  }

  return {
    valid: true,
    message: "",
  };
}

export { isValidTitle };
