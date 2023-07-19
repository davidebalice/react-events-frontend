import React, { createContext, useState, ReactNode } from "react";

interface ContextProps {
  debug: boolean;
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
