import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export default function NavProvider({ children }) {
  const [activeLink, setActiveLink] = useState("");

  return (
    <NavContext.Provider value={{ activeLink, setActiveLink }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNavProvider = () => useContext(NavContext);
