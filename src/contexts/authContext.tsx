import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getAccessToken, getUserLogged, putAccessToken } from "src/utils/api";

const AuthContext = createContext(null);

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    const token = getAccessToken();

    if (token !== "" && token !== null) {
      getUserLogged().then(({ error, data }) => {
        if (!error) {
          setAuth(data);
        } else {
          putAccessToken("");
          setAuth(data);
        }
      });
    }
  }, []);

  const value = useMemo(() => {
    return auth;
  }, [auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
