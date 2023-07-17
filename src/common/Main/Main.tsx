import React, { PropsWithChildren } from "react";

interface MainProps {}

const Main: React.FC<PropsWithChildren<MainProps>> = ({ children }) => {
  return <main id="main">{children}</main>;
};

export default Main;
