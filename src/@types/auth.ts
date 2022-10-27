type userTypes = {
  id: string;
  name: string;
  email: string;
};

type authTypes = {
  isLoading: boolean;
  auth: userTypes | null;
  onLogin: (token: string) => void;
  onLogout: () => void;
};

export type { userTypes, authTypes };
