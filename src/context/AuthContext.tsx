import {
  createContext,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";
type User = {
  email: string;
  name: string;
  id: string;
};

type AuthContextType = {
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>>;
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
};

export const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
  user: null,
  setUser: () => {},
});

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(localStorage.getItem("user") || null);

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
