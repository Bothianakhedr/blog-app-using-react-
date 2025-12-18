import {
  createContext,
  useEffect,
  useState,
  type ReactNode,
  type SetStateAction,
} from "react";

type ThemeContextType = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<SetStateAction<boolean>>;
};
export const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  setDarkMode: () => {},
});

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
