import React, { createContext, useState, ReactNode } from "react";
export const backendURL = "http://localhost:8000";

interface ContextProps {
  debug: boolean;
  backendURL: string;
  lang: string;
  firstRoute: boolean;
  rendered: boolean;
  setDebug: (debug: boolean) => void;
  setLang: (lang: string) => void;
  setFirstRoute: (firstRoute: boolean) => void;
  setRendered: (rendered: boolean) => void;
}

export const Context = createContext<ContextProps>({
  debug: true,
  backendURL: backendURL,
  lang: "en",
  firstRoute: true,
  rendered: false,
  setDebug: () => {},
  setLang: () => {},
  setFirstRoute: () => {},
  setRendered: () => {},
});

interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  const [debug, setDebug] = useState(true);
  const [lang, setLang] = useState("en");
  const [firstRoute, setFirstRoute] = useState(true);
  const [rendered, setRendered] = useState(false);

  return (
    <Context.Provider
      value={{
        debug,
        backendURL,
        lang,
        firstRoute,
        rendered,
        setDebug,
        setLang,
        setFirstRoute,
        setRendered,
      }}
    >
      {children}
    </Context.Provider>
  );
}
