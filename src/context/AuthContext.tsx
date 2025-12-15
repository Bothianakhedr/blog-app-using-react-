import { createContext, type SetStateAction } from "react";

type TokenContextType = {
  token: string | null;
  setToken: React.Dispatch<SetStateAction<string | null>>;
  user: {
    id: string;
    email: string;
    name: string;
  };
  setUser: React.Dispatch<SetStateAction<string | null>>;
};

export const AuthContext = createContext<TokenContextType>({
  token: null,
  setToken: () => {},
  user: {
    id: "",
    email: "",
    name: "",
  },
  setUser: () => {},
});
