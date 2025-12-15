import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type SearchContextType = {
  term: string;
  setTerm: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<SearchContextType>({
  term: "",
  setTerm: () => {}
});

export const SearchContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [term, setTerm] = useState("");
  
  

  return (
    <SearchContext.Provider value={{ term, setTerm  }}>
      {children}
    </SearchContext.Provider>
  );
};
