import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getAccessToken, getUserLogged, putAccessToken } from "src/utils/api";

const AuthContext = createContext({ isLogin: false, auth: {} });

type AuthProviderProps = {
  children: ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [isLogin, setIsLogin] = useState(false);
  const [auth, setAuth] = useState({});

  useEffect(() => {
    const token = getAccessToken();
    if (token !== "" && token !== null) {
      getUserLogged().then(({ error, data }) => {
        if (!error) {
          setIsLogin(true);
          setAuth(data);
        } else {
          putAccessToken("");
        }
      });
    }
  }, []);

  const value = useMemo(() => {
    return { isLogin, auth };
  }, [isLogin, auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
