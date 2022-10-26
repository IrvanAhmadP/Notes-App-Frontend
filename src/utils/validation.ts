function isValidTitle(val: string) {
  const MIN = 5;

  if (val.length < MIN) {
    return {
      valid: false,
      message: `The title must be at least ${MIN} characters`,
    };
  }

  return {
    valid: true,
    message: "",
  };
}

export { isValidTitle };
