// layouts

const authLayoutContent = () => {
  return {
    id: {
      message: "Kelola catatan Anda dengan lebih mudah",
    },
    en: {
      message: "Manage your notes more easily",
    },
  };
};

// pages

const loginContent = () => {
  return {
    id: {
      title: "Masuk",
      emailInput: "Surel",
      passwordInput: "Kata sandi",
      textBetweenLines: "ATAU",
      loginButton: "Masuk",
      registerButton: "Daftar",
    },
    en: {
      title: "Login",
      emailInput: "Email",
      passwordInput: "Password",
      textBetweenLines: "OR",
      loginButton: "Login",
      registerButton: "Register",
    },
  };
};

const registerContent = () => {
  return {
    id: {
      title: "Daftar",
      nameInput: "Nama",
      emailInput: "Surel",
      passwordInput: "Kata sandi",
      confirmPasswordInput: "Konfirmasi kata sandi",
      textBetweenLines: "ATAU",
      registerButton: "Daftar",
      loginButton: "Masuk",
      registerSuccessMsg: "Pendaftaran berhasil. Silahkan masuk.",
    },
    en: {
      title: "Register",
      nameInput: "Name",
      emailInput: "Email",
      passwordInput: "Password",
      confirmPasswordInput: "Confirm password",
      textBetweenLines: "OR",
      registerButton: "Register",
      loginButton: "Login",
      registerSuccessMsg: "Registration was successful. Please login.",
    },
  };
};

const pageNotFoundContent = () => {
  return {
    id: {
      title: "Halaman Tidak Ditemukan",
      message: "Halaman tidak ditemukan, kembali ke",
      homeLink: "beranda",
      loginLink: "masuk",
    },
    en: {
      title: "Page Not Found",
      message: "Page not found, back to",
      homeLink: "home",
      loginLink: "login",
    },
  };
};

const newNoteContent = () => {
  return {
    id: {
      title: "Catatan Baru",
      titleInput: "Judul",
      bodyInputLabel: "Isi",
      bodyInputPlaceholder: "Ketik isi catatan disini...",
      resetButton: "Atur ulang",
      saveButton: "Simpan",
    },
    en: {
      title: "New Note",
      titleInput: "Title",
      bodyInputLabel: "Body",
      bodyInputPlaceholder: "Write a note here...",
      resetButton: "Reset",
      saveButton: "Save",
    },
  };
};

const noteContent = () => {
  return {
    id: {
      notFoundTitle: "catatan tidak tersedia",
      modalTitle: "Hapus catatan",
      modalMessage: "Apa Anda yakin ingin menghapus catatan",
      modalCancelButton: "Batal",
      modalDeleteButton: "Hapus",
    },
    en: {
      notFoundTitle: "note not found",
      modalTitle: "Delete note",
      modalMessage: "Are you sure want to delete",
      modalCancelButton: "Cancel",
      modalDeleteButton: "Delete",
    },
  };
};

const notesContent = () => {
  return {
    id: {
      activePageTitle: "Catatan Aktif",
      archivedPageTitle: "Catatan Diarsipkan",
    },
    en: {
      activePageTitle: "Active Notes",
      archivedPageTitle: "Archived Notes",
    },
  };
};

// components

const noteComponentContent = () => {
  return {
    id: {
      unarchiveButton: "Batalkan pengarsipan",
      archiveButton: "Arsipkan",
      deleteButton: "Hapus",
    },
    en: {
      unarchiveButton: "Unarchive",
      archiveButton: "Archive",
      deleteButton: "Delete",
    },
  };
};

const searchInputComponentContent = () => {
  return {
    id: {
      searchInputPlaceholder: "Ketikkan kata kunci",
      searchResultMessage: "hasil dari",
    },
    en: {
      searchInputPlaceholder: "Type the keyword",
      searchResultMessage: "results for",
    },
  };
};

const dataNotFoundComponentContent = () => {
  return {
    id: {
      message: "Data tidak ditemukan",
      createNoteLink: "buat catatan",
    },
    en: {
      message: "Data not found",
      createNoteLink: "create a note",
    },
  };
};

const noteNotFoundComponentContent = () => {
  return {
    id: {
      message: "Catatan tidak ditemukan, kembali ke",
      homeLink: "beranda",
    },
    en: {
      message: "Note not found, return to",
      homeLink: "homepage",
    },
  };
};

const navBarComponentContent = () => {
  return {
    id: {
      activeNotesLink: "Catatan Aktif",
      archivedNotesLink: "Catatan diarsipkan",
    },
    en: {
      activeNotesLink: "Active Notes",
      archivedNotesLink: "Archived Notes",
    },
  };
};

export {
  // layouts
  authLayoutContent,

  //pages
  loginContent,
  pageNotFoundContent,
  newNoteContent,
  noteContent,
  notesContent,
  registerContent,

  //components
  noteComponentContent,
  searchInputComponentContent,
  dataNotFoundComponentContent,
  noteNotFoundComponentContent,
  navBarComponentContent,
};
