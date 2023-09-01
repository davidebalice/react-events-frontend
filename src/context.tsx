import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import axios from "axios";
import apiUrls from "./config";

interface ContextProps {
  debug: boolean;
  lang: string;
  firstRoute: boolean;
  rendered: boolean;
  setDebug: (debug: boolean) => void;
  setLang: (lang: string) => void;
  setFirstRoute: (firstRoute: boolean) => void;
  setRendered: (rendered: boolean) => void;
  categories: Category[];
}

export const Context = createContext<ContextProps>({
  debug: true,
  lang: "en",
  firstRoute: true,
  rendered: false,
  setDebug: () => {},
  setLang: () => {},
  setFirstRoute: () => {},
  setRendered: () => {},
  categories: [],
});

interface ProviderProps {
  children: ReactNode;
}

interface Category {
  _id: number;
  name: string;
  imageCover: string;
}

export function Provider({ children }: ProviderProps) {
  const [debug, setDebug] = useState(true);
  const [lang, setLang] = useState("en");
  const [firstRoute, setFirstRoute] = useState(true);
  const [rendered, setRendered] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get(apiUrls.getCategories)
      .then((response) => {
        setCategories(response.data.categories);
      })
      .catch((error) => {
        console.error("Error calling api:", error);
      });
  }, []);

  return (
    <Context.Provider
      value={{
        debug,
        lang,
        firstRoute,
        rendered,
        setDebug,
        setLang,
        setFirstRoute,
        setRendered,
        categories,
      }}
    >
      {children}
    </Context.Provider>
  );
}
