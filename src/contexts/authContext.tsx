import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getAccessToken, getUserLogged, putAccessToken } from "src/utils/api";

const AuthContext = createContext({
  isLoading: true,
  auth: null,
  onLogin: (token: string) => {},
  onLogout: () => {},
});

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(getAccessToken || null);
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    if (token !== "" && token !== null) {
      getUserLogged().then(({ error, data }) => {
        if (!error) {
          setAuth(data);
        } else {
          onLogout();
        }

        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [token]);

  const onLogin = (token: string) => {
    putAccessToken(token);
    setToken(token);
  };

  const onLogout = () => {
    putAccessToken("");
    setAuth(null);
  };

  const value = useMemo(() => {
    return { isLoading, auth, onLogin, onLogout };
  }, [isLoading, auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
