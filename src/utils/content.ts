const authLayout = () => {
  return {
    id: {
      message: "Kelola catatan Anda dengan lebih mudah",
    },
    en: {
      message: "Manage your notes more easily",
    },
  };
};

const login = () => {
  return {
    id: {
      login: "Masuk",
      register: "Daftar",
      email: "Email",
      password: "Kata Sandi",
    },
    en: {
      login: "Login",
      register: "Register",
      email: "Email",
      password: "Password",
    },
  };
};

export { authLayout, login };
